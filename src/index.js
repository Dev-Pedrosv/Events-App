import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes'


ReactDOM.render(
  <Router>

    <MainRoutes />
  </Router>,
  document.getElementById('root')
);
