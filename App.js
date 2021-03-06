import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "đ": "Smiling",
  "đ": "Watermelon",
  "âšī¸": "Sad",
  "đĨĄ": "takeout box",
  "â¤ī¸": "love",
  "đ": "Thumbs-up",
  "đĨ": "fire",
  "đ": "Smiling Face with Heart-Eyes",
  "đ¤": "Money-Mouth Face",
  "đ¤Ž": "Face Vomiting"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!!</h1>
      <input
        placeholder="put an emoji to know its meaning"
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ color: "red" }}>{meaning}</h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => {
              onClickHandler(emoji);
            }}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
