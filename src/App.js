import React from 'react';

import Landing from './pages/Landing'
import Missing from './pages/404'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<Missing />} />
          </Routes>
      </Router>
  );
}

export default App;