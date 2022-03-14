
import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { useRoutes } from './conponents/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  const routes = useRoutes(true)

  return (
    <Router>
      <div className="App">
       {routes}
      </div>
    </Router>
  );
}

export default App;
