import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
    <div className="twett">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit} className="container twettEdit">
                <input
                  type="text"
                  placeholder="Edit your twett"
                  value={newTwett}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="Update Twett" className="formBtn" />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <h4>{twettObj && twettObj.text}</h4>
          {twettObj.savedFileUrl && <img src={twettObj.savedFileUrl} />}
          {isOwner && (
            <div class="twett__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Twett;
