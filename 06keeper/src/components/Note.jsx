import React from "react";
import PropTypes from "prop-types";

function Note({ title, content, id, onDelete }) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="inline-block px-3 py-2 m-5 bg-white border-none rounded-lg max-w-64 min-w-64 relative">
      <h1 className="text-2xl border-b-[1px] text-slate-900 border-black">
        {title}
      </h1>
      <p className="text-lg text-slate-600 mb-9">{content}</p>
      <button className="absolute right-3 bottom-2" onClick={handleClick}>
        <span className="font-bold text-amber-500 text-sm">DELETE</span>
      </button>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
