import React from "react";
import { PlayableParagraph } from "./playableParagraph";

export const PlayableTranscript = (props) => {
  const {
    playableTranscript,
    setPlaybackToStartOfWord,
    playAction,
    pauseAction,
  } = props;

  const transcriptParagraphs = playableTranscript.transcript;

  const playableParagraphs = transcriptParagraphs.map((paragraph, index) => {
    return (
      <PlayableParagraph
        key={index}
        playableParagraph={paragraph}
        setPlaybackToStartOfWord={setPlaybackToStartOfWord}
        playAction={playAction}
        pauseAction={pauseAction}
      />
    );
  });

  return playableParagraphs;
};
