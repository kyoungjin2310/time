"use client";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "./datepicker.mobule.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => date && setStartDate(date)}
      inline
    />
  );
};

export default Datepicker;
