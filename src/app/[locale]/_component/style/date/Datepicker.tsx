"use client";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "./datepicker.mobule.css";
import { addMonths, subMonths } from "date-fns";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="title">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
        />
      </div>
      <div className="main">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          inline
        />
      </div>
    </div>
  );
};

export default Datepicker;
