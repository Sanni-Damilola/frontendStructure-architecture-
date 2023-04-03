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

  // const id = "qwttyu";
  // const wallet = "ssss";

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (data: Iuser) => postUser(data, id, wallet),
  // });

  // const onsubmit = () => {
  //   mutate({
  //   });
  // };

  return <div>Home</div>;
};

export default Home;
