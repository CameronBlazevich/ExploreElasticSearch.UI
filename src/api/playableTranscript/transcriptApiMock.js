import delay from "./delay";
import exampleJson from "./exampleTranscriptJson.json";

class TranscriptApi {
  static get(mediaId) {
    // return await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Object.assign([], exampleJson));
    //   }, delay);
    // });
    // console.log(entireTranscript);
    return exampleJson;
  }
}
export default TranscriptApi;
