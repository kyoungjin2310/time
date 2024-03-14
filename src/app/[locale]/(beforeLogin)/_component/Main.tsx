"use client";
import Datepicker from "@/app/[locale]/_component/style/date/Datepicker";
import style from "./main.module.css";
const Main = () => {
  return (
    <div className={style.mainContainer}>
      <Datepicker />
    </div>
  );
};

export default Main;
