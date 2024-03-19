"use client";
import React from "react";
import TimeCard from "../../_component/style/time/TimeCard";

export default function TimeWrap({}) {
  const obj = {
    div: "Division",
    subDiv: "SubDivision",
    startTime: 1030,
    endTime: 1220,
  };
  return (
    <div>
      <h3>{}</h3>
      <TimeCard obj={obj} />
    </div>
  );
}
