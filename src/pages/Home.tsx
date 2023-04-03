/** @format */

import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { dictionary } from "../util/api";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: dictionary,
  });

  const { mutate, isLoading } = useMutation({});

  return <div>Home</div>;
};

export default Home;
