import axios from "axios";

export const getLinkSearch = async (
  query: string,
  setVideos: (i: any) => void
) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyBYhdxmikbxmokbMa7YH62odfZ0darqdHk&cx=a4f4b5764b60b450b&q=${query}`
  );

  setVideos(data.items);
  console.log(data.items);
};
