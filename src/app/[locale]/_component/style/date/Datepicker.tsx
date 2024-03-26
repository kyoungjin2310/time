"use client";
import { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useCurrentLocale } from "@/app/messages/client";
import dayjs from "dayjs";
import { ko } from "date-fns/locale";

import "./datepicker.mobule.css";
import { subDays } from "date-fns";
import { forwardRef } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useDateContext } from "@/app/[locale]/(beforeLogin)/_component/DateProvider";

const Datepicker = () => {
  const queryClient = useQueryClient();
  const locales = useCurrentLocale();
  const [startDate, setStartDate] = useState(new Date());
  const [locale, seLocale] = useState(locales == "kr" ? ko : locales);
  const { date, setDate } = useDateContext();

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

  useEffect(() => {
    setDate(dayjs(startDate).format("ddd"));
  }, []);

  const onChange = (date: Date | null) => {
    setDate(`${dayjs(startDate).format("ddd")}`);
    if (date) setStartDate(date);
  };

  return (
    <div className="dateWrap">
      <p>{date}</p>
      <div className="title">
        <ReactDatePicker
          locale={locale}
          selected={startDate}
          onChange={(date) => onChange(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          customInput={<CustomInput />}
        />
      </div>
      <div className="main">
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => onChange(date)}
          onMonthChange={(date) => onChange(date)}
          highlightDates={highlightWithRanges}
          inline
        />
      </div>
    </div>
  );
};

export default Datepicker;
