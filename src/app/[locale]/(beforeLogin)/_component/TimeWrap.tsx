"use client";
import React, { MouseEvent, useState } from "react";
import TimeCard from "../../_component/style/time/TimeCard";
import { motion, AnimatePresence } from "framer-motion";
import style from "./timewrap.module.css";
type Props = {
  date: any;
};
export default function TimeWrap({ date }: Props) {
  const [open, setOpen] = useState<Boolean>(false);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className={style.timewrap}>
      <h3 className={style.timeTitle}>{date.div}</h3>
      <h4>{date.subDiv}</h4>
      <div>
        <button onClick={onClick} style={{ width: 100, height: 100 }}>
          <p>{date.startTime}</p>
          <p>{date.endTime}</p>
        </button>
      </div>
      {
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? date.div : null}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: open ? 1 : 0 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <TimeCard obj={date} />
          </motion.div>
        </AnimatePresence>
      }
    </div>
  );
}
