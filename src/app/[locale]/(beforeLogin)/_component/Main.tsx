"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import TimeWrap from "./TimeWrap";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DateProvider, DateContext } from "./DateProvider";
import { useContext, useEffect } from "react";

const Main = () => {
  const queryClient = useQueryClient();
  const { date, setDate } = useContext(DateContext);
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

  useEffect(() => {
    console.log(date);
  }, [data, setDate, DateContext]);

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
        <DateProvider>
          <>
            <Datepicker />
            <div className={style.timewrap}>
              <h2>{`${date}`}</h2>
              {data?.map((n: any, key: any) => (
                <TimeWrap key={key} date={n} />
              ))}
            </div>
          </>
        </DateProvider>
      </div>
    </div>
  );
};

export default Main;
