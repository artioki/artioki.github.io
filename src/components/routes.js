import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Timer from "./pages/Timer/Timer";
import Layout from "./Layout/Layout";

export const useRoutes = (isAuthenticatied) => {
  if (isAuthenticatied) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} exact />
          <Route path="map" element={<Map />} exact />
          <Route path="timer" element={<Timer />} exact />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="" element={<home />} exact />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
