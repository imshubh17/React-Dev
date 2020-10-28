import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Pages/Pages';

function App() {
  return (
    <Router>
      
        <Pages/>
     
    </Router>
  );
};

export default App;
