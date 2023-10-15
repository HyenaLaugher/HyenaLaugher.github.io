import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

// import { ThemeProvider } from "@emotion/react";
// import { CssBaseline } from "@mui/material";
// import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>

  // <React.StrictMode>
  //   {/* <ThemeProvider theme={theme}> */}
  //   {/* <CssBaseline /> */}
  //   <App />
  //   {/* </ThemeProvider> */}
  // </React.StrictMode>
);
