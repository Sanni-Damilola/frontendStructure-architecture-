/** @format */

import { Iuser } from "../../types";
import axios from "./api";

export const dictionary = async () => {
  return await axios
    .get("/define")
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

export const postUser = async (data: Iuser, id: string, wallet: string) => {
  await axios
    .post(`/define/${id}/${wallet}`, data)
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};
