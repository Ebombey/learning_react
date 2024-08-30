import React from "react";
import PropTypes from "prop-types";

function Note({ title, content }) {
  return (
    <>
      <div className="text-black bg-[#fff9e3] w-60 max-h-64 m-6 p-3 border rounded-md flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    </>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
