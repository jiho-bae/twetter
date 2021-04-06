import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [twett, setTwett] = useState("");
  const [twetts, setTwetts] = useState("");
  const getTwetts = async () => {
    const dbTwetts = await dbService.collection("twetts").get();
    dbTwetts.forEach((document) => {
      const twettObject = {
        ...document.data(),
        id: document.id,
      };
      setTwetts((prev) => [twettObject, ...prev]);
    });
  };
  useEffect(() => {
    getTwetts();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (twett !== "") {
      await dbService.collection("twetts").add({
        twett,
        createdAt: Date.now(),
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
              <h4>{twett.twett}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
