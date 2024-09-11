import React, { useState } from "react";
import PropTypes from "prop-types";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div className="w-full flex justify-center">
      <form className="relative flex flex-col gap-4 rounded-lg my-4 w-[480px] p-4 bg-white">
        <div className="flex flex-col gap-2 mb-5">
          <input
            className="text-xl py-1 px-2 focus:outline-none"
            type="text"
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
            required
          />
          <textarea
            className="text-lg py-1 px-2 focus:outline-none"
            type="text"
            name="content"
            value={note.content}
            placeholder="Add task here"
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-amber-500 px-3 py-3 text-white absolute right-4 rounded-full bottom-[-18px]"
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
