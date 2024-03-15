"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
import MainBtn from "../../_component/style/btn/MainBtn";
const Main = () => {
  return (
    <div className={style.mainContainer}>
      <MainBtn />
      <Datepicker />
    </div>
  );
};

export default Main;
