import React, { Component } from "react";
import TranscriptApi from "../../api/playableTranscript/transcriptApiMock";
import { PlayableTranscript } from "./playableTranscript";

class Transcript extends Component {
  render() {
    const { mediaId } = this.props.match.params;
    const transcript = this.getTranscript(mediaId);
    return (
      <div className="Transcript">
        <div className="row">
          <div className="offset-md-4 col-md-8">
            <audio
              id="audioPlayer"
              src={`/audio/Q&A How to train for a small, stable, strong waist.mp3`}
              controls
              type="audio/mp3"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="offset-md-4 col-md-8">
          <PlayableTranscript
            playableTranscript={transcript}
            setPlaybackToStartOfWord={this.skipAhead}
            playAction={this.playAction}
            pauseAction={this.pauseAction}
          />
        </div>
      </div>
    );
  }

  skipAhead(secondMarkToSkipTo) {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.currentTime = secondMarkToSkipTo;
  }

  playAction(secondMarkToStartPlay) {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.currentTime = secondMarkToStartPlay;
    audioPlayer.play();
  }

  pauseAction() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.pause();
  }

  getTranscript(mediaId) {
    return TranscriptApi.get(mediaId);
  }

  renderTranscript(transcript) {
    console.log(transcript);
    return this.renderParagraphs(transcript);
  }

  renderParagraphs(transcript) {
    const test = transcript.map((paragraph) => {
      return (
        <div className="row">
          <div>
            <span>{paragraph.speaker}: </span>
          </div>
          {this.renderWords(paragraph)}
        </div>
      );
    });

    //console.log(test);
    return test;
  }

  renderWords(paragraph) {
    const intervals = paragraph.intervals;
    const result = [];
    for (var intervalIndex in intervals) {
      const timeStampedWords = intervals[intervalIndex].wordTimes.map(
        (wordTime) => {
          return (
            <span
              data-id={wordTime.estimatedStart}
              onClick={() => this.skipAhead(wordTime.estimatedStart)}
            >
              {" "}
              {wordTime.word}
            </span>
          );
        }
      );
      result.push(timeStampedWords);
    }
    // console.log("timeStampedWords: " + JSON.stringify(timeStampedWords));
    return <div className="paragraph">{result}</div>;
  }
}

export default Transcript;
