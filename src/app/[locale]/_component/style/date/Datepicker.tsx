"use client";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useCurrentLocale } from "@/app/messages/client";
import { ko } from "date-fns/locale";

import "./datepicker.mobule.css";
import { subDays } from "date-fns";
import { forwardRef } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

const Datepicker = () => {
  const locales = useCurrentLocale();
  const [startDate, setStartDate] = useState(new Date());
  const [locale, seLocale] = useState(locales == "kr" ? ko : locales);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const highlightWithRanges: any = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        subDays(new Date(), 4),
        subDays(new Date(), 3),
        subDays(new Date(), 2),
        subDays(new Date(), 1),
      ],
    },
  ];
  return (
    <div className="dateWrap">
      <div className="title">
        <ReactDatePicker
          locale={locale}
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          customInput={<CustomInput />}
        />
      </div>
      <div className="main">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          onMonthChange={(date) => date && setStartDate(date)}
          highlightDates={highlightWithRanges}
          inline
        />
      </div>
    </div>
  );
};

export default Datepicker;
