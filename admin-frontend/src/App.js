import React from "react";
import Navigation from './views/Navigation';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
          <div>
              <Navigation/>
          </div>
      </Router>
  );
}

export default App;
