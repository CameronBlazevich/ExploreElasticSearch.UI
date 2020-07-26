import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export const MiniPlaybackControl = props => {
  const { timeStamp, playAction, pauseAction } = props;
  return (
    <div className="row" style={style.row}>
      <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
      <span style={style.timeStamp}>{timeStamp}</span>
      <FontAwesomeIcon
        icon={faPlay}
        style={style.playButton}
        onClick={playAction}
      ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPause} onClick={pauseAction}></FontAwesomeIcon>
    </div>
  );
};

const style = {
  timeStamp: {
    marginRight: "10px",
    marginLeft: "2px",
    padding: "2px"
  },
  row: {
    alignItems: "center",
    opacity: "35%"
  },
  playButton: {
    marginRight: "3px"
  }
};
