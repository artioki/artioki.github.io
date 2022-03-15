import React, { useState } from "react";
import css from "./Map.module.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyAccordion from "../../MyAccordion/MyAccordion";
import PropTypes from "prop-types";

const Preloader = ({ is }) => {
  if (is) {
    return null;
  } else {
    return (
      <div
        className={css.icon}
        style={{ margin: "auto", width: "300px", height: "300px" }}
      >
        <FontAwesomeIcon
          className={css.iconAnimate}
          icon="fa-solid fa-spinner"
        />
      </div>
    );
  }
};

const Maps = () => {
  const [map, setmap] = useState(false);

  return (
    <>
      <div className={css.boxColumn}>
        <div className={css.box_my}>
          <MyAccordion title={"My home"}>
            <YMaps query={{ lang: "en_RU" }}>
              <div>
                <Preloader is={map} />
                <Map
                  style={{ margin: "auto", width: "300px", height: "300px" }}
                  onLoad={(ymaps) => setmap(true)}
                  defaultState={{ center: [56.751075, 37.200017], zoom: 16 }}
                >
                  <Placemark geometry={[56.751075, 37.200017]} />
                </Map>
              </div>
            </YMaps>
          </MyAccordion>
        </div>
      </div>
    </>
  );
};
Preloader.propTypes = {
  is: PropTypes.bool,
};
export default Maps;
