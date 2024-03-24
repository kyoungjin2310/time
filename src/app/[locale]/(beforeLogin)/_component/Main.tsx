"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import TimeWrap from "./TimeWrap";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const date = "2023-03-24";
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["date"],
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
        {data?.map((n: any, key: any) => (
          <TimeWrap key={key} date={n} />
        ))}
      </div>
    </div>
  );
};

export default Main;
