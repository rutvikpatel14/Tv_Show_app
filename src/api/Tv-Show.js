// import axios from "axios";
import { Fake_popular,Fake_Recommendation } from "./Fake_popular";
// import { BASE_URL, API_KEY } from "./Config";

export class TvShowAPI {
  static async fetchPopular() {
    // const response = await axios.get(`${BASE_URL}tv/popular?${API_KEY}`);
    // console.log(response.data.results);
    // return response.data.results;
    return Fake_popular;
  }

  static async fetchRecommandation(tvShowId) {
    // const response = await axios.get(
    //   `${BASE_URL}tv/${tvShowId}/recommendations?${API_KEY}`
    // );
    // return response.data.results;
    return Fake_Recommendation
  }
}
