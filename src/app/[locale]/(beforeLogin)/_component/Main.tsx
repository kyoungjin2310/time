"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import { DateProvider } from "./DateProvider";
import TimeContentWrap from "./TimeContentWrap";

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <MainBtn />
      <div className={style.df}>
        <DateProvider>
          <>
            <Datepicker />
            <TimeContentWrap />
          </>
        </DateProvider>
      </div>
    </div>
  );
};

export default Main;
