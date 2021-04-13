import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Twett from "components/Twett";

const Home = ({ userObj }) => {
  const [twett, setTwett] = useState("");
  const [twetts, setTwetts] = useState("");
  const [fileUrl, setFileUrl] = useState();

  useEffect(() => {
    dbService.collection("twetts").onSnapshot((snapshot) => {
      const twettArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTwetts(twettArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (twett !== "") {
      await dbService.collection("twetts").add({
        text: twett,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      setTwett("");
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

  const onClearFileUrlClick = () => setFileUrl(null);
  return (
    <div>
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
      <div>
        {twetts &&
          twetts.map((twett) => (
            <Twett
              key={twett.id}
              twettObj={twett}
              isOwner={twett.creatorId === userObj.uid}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
