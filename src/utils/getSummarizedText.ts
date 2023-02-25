import axios from "axios";

export const getSummarizedText = async (
  summaryPercent: number,
  text: string,
  setSummary: (i: any) => void
) => {
  const options = {
    method: "POST",
    url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "114a48a5b6msh7046087634bcaf9p13572ajsna3d96a91cf16",
      "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
    },
    data: `{"language":"english","summary_percent":${summaryPercent},"text":"${text}"}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setSummary(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
