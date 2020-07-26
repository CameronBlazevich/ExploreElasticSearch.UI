import React from "react";

export const PlayableParagraphWords = (props) => {
  const { words, setPlaybackToStartOfWord } = props;

  const timeStampedWords = words.map((word, index) => {
    return (
      <span
        key={index}
        data-id={word.start_time}
        onClick={() => setPlaybackToStartOfWord(word.start_time)}
        // consider highlight the words if the playback time is between word.start_time and word.end_time
      >
        {" "}
        {word.text}
      </span>
    );
  });

  return <div className="col-md-10">{timeStampedWords}</div>;
};
