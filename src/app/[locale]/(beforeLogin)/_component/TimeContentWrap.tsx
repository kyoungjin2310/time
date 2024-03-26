"use client";
import { useContext, useEffect } from "react";
import TimeWrap from "./TimeWrap";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MyContext } from "./DateProvider";
import style from "./timewrap.module.css";

const TimeContentWrap = () => {
  const queryClient = useQueryClient();
  const account = useContext(MyContext);
  //@ts-ignore
  const { value, setValue } = account;
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["card"],
    queryFn: async () => {
      return [
        {
          div: "Division",
          subDiv: "SubDivision",
          startTime: 1030,
          endTime: 1220,
        },
        {
          div: "Division",
          subDiv: "SubDivision",
          startTime: 1100,
          endTime: 1200,
        },
      ];
    },
  });

  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div className={style.timewrap}>
      <h2>{`${value}`}</h2>
      {data?.map((n: any, key: any) => (
        <TimeWrap key={key} date={n} />
      ))}
    </div>
  );
};

export default TimeContentWrap;
