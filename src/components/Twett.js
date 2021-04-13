import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Twett = ({ twettObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTwett, setNewTwett] = useState(twettObj.text);

  const onDeleteClick = async () => {
    const ok = global.confirm("Are you sure you want to delete this twett?");
    if (ok) {
      await dbService.doc(`twetts/${twettObj.id}`).delete();
      await storageService.refFromURL(twettObj.savedFileUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`twetts/${twettObj.id}`).update({
      text: newTwett,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTwett(value);
  };
  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Edit your twett"
                  value={newTwett}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Twett" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{twettObj && twettObj.text}</h4>
          {twettObj.savedFileUrl && (
            <img src={twettObj.savedFileUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Twett</button>
              <button onClick={toggleEditing}>Edit Twett</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Twett;
