import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import "./index.css";
import "rc-slider/assets/index.css";
import "./styles/index.scss";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App></App>
  </Provider>
  //</React.StrictMode>
)


reportWebVitals();