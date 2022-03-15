import React from "react";
import MyTimer from "../../MyTimer/MyTimer";
import css from "./Timer.module.scss";

const Timer = () => {
  return (
    <div className={css.boxColumn}>
      <div className={css.box_my}>
        <MyTimer />
      </div>
    </div>
  );
};

export default Timer;
