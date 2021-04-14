import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";

const TwettFactory = ({ userObj }) => {
  const [twett, setTwett] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let savedFileUrl = "";
    if (fileUrl !== "") {
      const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await fileRef.putString(fileUrl, "data_url");
      savedFileUrl = await response.ref.getDownloadURL();
    }
    const twettObj = {
      text: twett,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      savedFileUrl,
    };
    if (twett !== "") {
      await dbService.collection("twetts").add(twettObj);
      setTwett("");
      setFileUrl("");
    }
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTwett(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFileUrl(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearFileUrlClick = () => setFileUrl("");

  return (
    <form onSubmit={onSubmit}>
      <input
        value={twett}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <input type="file" accept="image/*" onChange={onFileChange} />
      <input type="submit" value="Twett" />
      {fileUrl && (
        <div>
          <img src={fileUrl} width="50px" height="50px" />
          <button onClick={onClearFileUrlClick}>Clear</button>
        </div>
      )}
    </form>
  );
};
export default TwettFactory;