/** @format */

import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { dictionary, postUser } from "../util/api";
import { Iuser } from "../types";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: dictionary,
  });

  return <div>Home</div>;
};

export default Home;
