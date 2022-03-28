import React from "react";
const ListeComment = ({ comment }) => {
  return (
    <div>
      <div className="Comment">
        <img
          alt="ImgUser"
          src={comment.ImgUser}
          className="d-inline-block align-top"
        />
        <h6>
          {comment.FirstNameUser} {comment.LastNameUser}{" "}
        </h6>
      </div>
      <h4>{comment.Description}</h4>
    </div>
  );
};

export default ListeComment;
