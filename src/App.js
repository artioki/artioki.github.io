import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Context } from "./context";
import styled from "styled-components";

const Styled = styled.div`
  height: 100%;

  .app {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .content {
    flex: 1 0 auto;
    padding: 0 20px;
    background: #f4f7fb;
  }

  header {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px rgb(0 0 0 / 10%);
  }
`;
function App() {
  const routes = useRoutes(true);
  const [second, setsecond] = useState(0);
  function update() {
    setsecond((second) => second + 1);
  }
  useEffect(() => {
    const intervald = setInterval(() => {
      update();
    }, 1000);
    return () => clearTimeout(intervald);
  }, []);
  return (
    <Context.Provider value={second}>
      <Styled>
        <div className="app">
          <Router>{routes}</Router>
        </div>
      </Styled>
    </Context.Provider>
  );
}

export default App;
