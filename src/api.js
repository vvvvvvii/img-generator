import axios from "axios";

const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
    },
    params: {
      query: term,
      per_page: 8,
      order_by: "popular",
    },
  });

  return res.data.results;
};

export default searchImages;
