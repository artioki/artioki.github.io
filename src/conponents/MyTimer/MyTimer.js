import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import MyAccordion from "../MyAccordion/MyAccordion";

let i = 0;
const MyTimer = ({ ismain }) => {
  const [second, setsecond] = useState(i);
  function update() {
    setsecond((second) => second + 1);
    if (ismain) {
      i += 1;
    }
  }
  useEffect(() => {
    const intervald = setInterval(() => {
      update();
    }, 1000);
    return () => clearTimeout(intervald);
  }, []);
  if (ismain) {
    return <></>;
  }
  return (
    <MyAccordion title={"Время на странице"}>
      <div className="timer">
        {~~((second % (60 * 60 * 60)) / (60 * 60))}:
        {~~((second % (60 * 60)) / 60)}:{second % 60}
      </div>
    </MyAccordion>
  );
};

MyTimer.propTypes = {
  ismain: PropTypes.bool,
};

export default MyTimer;
