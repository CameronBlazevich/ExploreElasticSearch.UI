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
  // static getAsync(searchTerm) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(Object.assign([], exampleJson));
  //     }, delay);
  //   });
  // }

  static async getAsync(mediaId) {
    const response = await fetch(
      `https://api.sonix.ai/v1/media/${mediaId}/transcript.json`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SONIX_API_KEY}`,
        },
      }
    );
    const transcript = await response.json();
    return transcript;
  }
}
export default TranscriptApi;
