import React from "react";
import MyTimer from "../../MyTimer/MyTimer";
import css from "./Timer.module.scss";

const Timer = () => {
  return (
    <div className={css["flex"]}>
      <div className={css["box"]}>
        <MyTimer />
      </div>
    </div>
  );
};

export default Timer;
