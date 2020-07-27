import * as ActionTypes from "./actionTypes";
import TranscriptApi from "../api/playableTranscript/transcriptApiMock";

export function playableTranscriptRequest(transcriptId) {
  return { type: ActionTypes.GET_PLAYABLE_TRANSCRIPT_REQUEST, transcriptId };
}

export function playableTranscriptSuccess(transcript) {
  return { type: ActionTypes.GET_PLAYABLE_TRANSCRIPT_SUCCESS, transcript };
}

export function getTranscript(transcriptId) {
  return function(dispatch) {
    dispatch(playableTranscriptRequest(transcriptId));
    TranscriptApi.getAsync(transcriptId)
      .then((transcript) => {
        dispatch(playableTranscriptSuccess(transcript));
      })
      .catch((error) => {
        throw error;
      });
  };
}
