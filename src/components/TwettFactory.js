import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TwettFactory = ({ userObj }) => {
  const [twett, setTwett] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const onSubmit = async (event) => {
    if (twett === "") return;

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
    await dbService.collection("twetts").add(twettObj);
    setTwett("");
    setFileUrl("");
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
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={twett}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label for="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ opacity: 0 }}
      />
      {fileUrl && (
        <div className="factoryForm__fileUrl">
          <img src={fileUrl} style={{ backgroundImage: fileUrl }} />
          <div className="factoryForm__clear" onClick={onClearFileUrlClick}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};
export default TwettFactory;
