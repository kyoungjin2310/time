"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import TimeWrap from "./TimeWrap";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const Main = () => {
  const queryClient = useQueryClient();
  const date = queryClient.refetchQueries({ queryKey: ["date"] });
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["card"],
    queryFn: async (date) => {
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

  console.log(date);

  if (error) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={style.mainContainer}>
      <MainBtn />
      <div className={style.df}>
        <Datepicker />
        <div className={style.timewrap}>
          <h2>{`${date}`}</h2>
          {data?.map((n: any, key: any) => (
            <TimeWrap key={key} date={n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
