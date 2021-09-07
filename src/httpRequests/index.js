import axios from "axios";

export const httpGetData = async () => {
  const { data } = await axios.get("https://api.github.com/repositories");
  return data;
};
