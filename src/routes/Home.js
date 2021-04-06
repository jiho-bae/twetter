import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  const [twett, setTwett] = useState("");
  const [twetts, setTwetts] = useState("");

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
        <input type="submit" value="Twett" />
      </form>
      <div>
        {twetts &&
          twetts.map((twett) => (
            <div key={twett.id}>
              <h4>{twett.text}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
