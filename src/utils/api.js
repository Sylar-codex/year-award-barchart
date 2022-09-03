import axios from "axios";
import { APIhost } from "../var/var";

const params = {
  method: "GET",
  url: "https://online-movie-database.p.rapidapi.com/actors/get-awards",
  params: { nconst: "nm0001667" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": APIhost,
  },
};

export const getData = async () => {
  const response = await axios.request(params);
  return response;
};
