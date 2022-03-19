import React, { useContext } from "react";
import MyAccordion from "../MyAccordion/MyAccordion";
import { Context } from "../../context";
const MyTimer = () => {
  const context = useContext(Context);

  return (
    <MyAccordion title={"Время на странице"}>
      <div className="timer">
        {Math.round((context % (60 * 60 * 60)) / (60 * 60))}:
        {Math.round((context % (60 * 60)) / 60)}:{context % 60}
      </div>
    </MyAccordion>
  );
};

export default MyTimer;
