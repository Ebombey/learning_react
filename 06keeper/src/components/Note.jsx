import React from "react";

function Note() {
  return (
    <>
      <div className="text-black bg-[#fff9e3] w-60 m-6 p-3 border rounded-md flex flex-col gap-2">
        <h1 className="text-xl font-bold">This is the note title</h1>
        <p className="text-lg">This is the note content</p>
      </div>
    </>
  );
}

export default Note;
