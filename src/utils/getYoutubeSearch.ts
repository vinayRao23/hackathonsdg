import axios from "axios";

export const getYoutubeSearch = (query: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": "114a48a5b6msh7046087634bcaf9p13572ajsna3d96a91cf16",
      "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
