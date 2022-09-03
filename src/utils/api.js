import axios from "axios";
import { APIkey, APIhost } from "../var/var";

const params = {
  method: "GET",
  url: "https://online-movie-database.p.rapidapi.com/actors/get-awards",
  params: { nconst: "nm0001667" },
  headers: {
    "X-RapidAPI-Key": APIkey,
    "X-RapidAPI-Host": APIhost,
  },
};

export const getData = async () => {
  const response = await axios.request(params);
  return response;
};
