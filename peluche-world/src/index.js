import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// On peut aussi écrire comme suivant :
//    ReactDOM.render(
//      <React.StrictMode>
// 		    <App />
// 	    </React.StrictMode>, 
//      document.getElementById('root')
//    )