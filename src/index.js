import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store';

import { Provider } from 'react-redux';


// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom';
const App = lazy(()=>import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
<Provider store={store}>
{/* <Suspense fallback="loading..."> */}
{/* <Suspense fallback="loading...">
<App />
<Toaster
  toastOptions={{
    position: 'top-right',
    style:{
        background :" #283046",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        fontSize: "14px",
    }
}}
/>
</Suspense> */}


<Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
  <App />
  <Toaster
    toastOptions={{
      position: 'top-right',
      style:{
          background: "#283046",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "14px",
      }
  }}
  />
</Suspense>


</Provider>
</BrowserRouter>
  
);

reportWebVitals();
