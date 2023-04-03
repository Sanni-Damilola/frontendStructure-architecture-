/** @format */

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dictionary } from "../util/api";
// import { Iuser } from "../types";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: dictionary,
  });

  console.log("reading data", data);

  // const id = "qwttyu";
  // const wallet = "ssss";

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (data: Iuser) => postUser(data, id, wallet),
  // });

  // const onsubmit = () => {
  //   mutate({
  //   });
  // };

  return (
    <div>
      <h2>Home Key</h2>
      {data?.list?.map((el: any) => (
        <p>{el?.definition}</p>
      ))}
    </div>
  );
};

export default Home;
