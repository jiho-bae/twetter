import React from "react";

const Twett = ({ twettObj, isOwner }) => (
  <div>
    <h4>{twettObj && twettObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete Twett</button>
        <button>Edit Twett</button>
      </>
    )}
  </div>
);

export default Twett;
