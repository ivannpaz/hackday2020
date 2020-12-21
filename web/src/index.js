import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import * as serviceWorker from "./serviceWorker";

var basePath = ""
if (process.env.NODE_ENV === "development") {
  basePath = "http://localhost:9000/"
}

ReactDOM.render(
  <App basePath={basePath} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
