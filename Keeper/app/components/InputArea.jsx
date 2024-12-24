"use client";
import React, { useState } from "react";

function InputArea(props) {
  const [inputTitle, setTitle] = useState("");
  const [inputText, setText] = useState("");

  function handleChange(event) {
    type = event.target.name;
    value = event.target.value;
  }

  <div>
    <form className="forms">
      <input
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="Title"
        value={notes.title}
        className="forms-input"
      ></input>

      <textarea
        name="content"
        onChange={handleChange}
        type="text"
        placeholder="Content"
        value={notes.content}
        rows="3"
        className="forms-textarea"
      />

      <button
        className="forms-button"
        onClick={() => {
          props.onAdd(notes.title, notes.content);
          setNotes({
            title: "",
            content: "",
          });
        }}
      >
        <span>Add</span>
      </button>
    </form>
  </div>;
}

export default InputArea;
