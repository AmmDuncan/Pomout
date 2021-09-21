import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./index.style";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@/App";
import reportWebVitals from "./reportWebVitals";

import store from "@store";
import { ThemeProvider } from "@context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
