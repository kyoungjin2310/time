"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
import TimeWrap from "./TimeWrap";
const Main = () => {
  return (
    <div className={style.mainContainer}>
      <MainBtn />
      <div className={style.df}>
        <Datepicker />
        <TimeWrap />
      </div>
    </div>
  );
};

export default Main;
