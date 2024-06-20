import React from "react";
import PropTypes from "prop-types";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete-button" onClick={() => onDelete(id)}>
        &times;
      </button>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;

