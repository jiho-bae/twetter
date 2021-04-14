import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Twett from "components/Twett";
import TwettFactory from "components/TwettFactory";

const Home = ({ userObj }) => {
  const [twetts, setTwetts] = useState("");

  useEffect(() => {
    dbService
      .collection("twetts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const twettArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTwetts(twettArray);
      });
  }, []);

  return (
    <div className="container">
      <TwettFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
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
