/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://mashape-community-urban-dictionary.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "17729b8fcemshb2b3aaf96dd0e52p1ee9acjsn81887aae6caf",
    "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
  },
  // withCredentials: true {if you use cors in yout backend and options}
});

export default instance;
