import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import PagesRoutes from "./routes/routes";

ReactDOM.render(
<React.StrictMode>
            <PagesRoutes />
        </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

