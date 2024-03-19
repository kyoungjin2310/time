import { useState } from "react";
import TimePickerItem from "./TimePickerItem";
import style from "./timecard.module.css";
interface Props {
  time: number;
}

let hoursN = 12;
let hours = [...Array(hoursN)].map((x, i) =>
  i + 1 < 10 ? "0" + (i + 1) : i + 1
);
let minutesN = 60;
let minutes = [...Array(minutesN)].map((x, i) => (i < 10 ? "0" + i : i));

const TimePicker = ({ time }: Props) => {
  const timeIndex = (number: string) => {
    return number.substring(0, 0) === "0"
      ? parseInt(number.substring(1, 2))
      : parseInt(number.substring(0, 2));
  };

  const [timeSelect, setTimeSelect] = useState({
    hoursT: `${String(time).substring(3, 5)}`,
    minutesT: `${String(time).substring(6, 8)}`,
  });

  const { hoursT, minutesT } = timeSelect;

  return (
    <div className={style.wrap}>
      <TimePickerItem
        itemArr={hours}
        keyName="hoursT"
        index={timeIndex(hoursT) - 1}
      />
      <TimePickerItem
        itemArr={minutes}
        keyName="minutesT"
        index={timeIndex(minutesT) + 3}
      />
    </div>
  );
};

export default TimePicker;
