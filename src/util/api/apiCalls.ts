/** @format */

import axios from "./api";

export const dictionary = async () => {
  await axios
    .get("/define")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};