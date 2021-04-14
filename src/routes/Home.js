import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Twett from "components/Twett";
import TwettFactory from "components/TwettFactory";

const Home = ({ userObj }) => {
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

  return (
    <div>
      <TwettFactory userObj={userObj} />
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
