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

const translateText = async (text) => {
  const res = await axios.get(
    "https://translated-mymemory---translation-memory.p.rapidapi.com/get",
    {
      headers: {
        "X-RapidAPI-Key": "7828246d9emsh7ff9626790ff38dp1e23afjsn6645b8184473",
        "X-RapidAPI-Host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
      },
      params: {
        langpair: "zh|en",
        q: text,
        mt: "1",
        onlyprivate: "0",
        de: "a@b.c",
      },
    }
  );
  return res.data.responseData.translatedText;
};

export { searchImages, translateText };
