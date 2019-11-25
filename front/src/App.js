import React from 'react';
import Links from './Links'
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from './MainLayout'

function App() {
  return (
    <Router>
      <MainLayout>
        <Links />
      </MainLayout>
    </Router>
  );
}

export default App;
