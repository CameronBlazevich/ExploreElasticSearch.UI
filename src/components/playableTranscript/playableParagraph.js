import React from "react";
import { PlayableParagraphWords } from "./playableParagraphWords";
import { MiniPlaybackControl } from "./miniPlaybackControl";

export const PlayableParagraph = (props) => {
  const {
    playableParagraph,
    setPlaybackToStartOfWord,
    playAction,
    pauseAction,
  } = props;

  const startTimeSeconds = playableParagraph.start_time;
  return (
    <div className="row playable-paragraph">
      <div className="col-md-2">
        <MiniPlaybackControl
          timeStamp={new Date(startTimeSeconds * 1000)
            .toISOString()
            .substr(11, 8)}
          playAction={() => playAction(startTimeSeconds)}
          pauseAction={pauseAction}
        ></MiniPlaybackControl>
        <div>
          <b>{playableParagraph.speaker}</b>
        </div>
      </div>

      <PlayableParagraphWords
        words={playableParagraph.words}
        setPlaybackToStartOfWord={setPlaybackToStartOfWord}
      ></PlayableParagraphWords>
    </div>
  );
};
