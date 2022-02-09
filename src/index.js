import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Theme_provider from "./context/Theme_provider";
ReactDOM.render(
  <BrowserRouter>
    <Theme_provider>
      <App />
    </Theme_provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
