import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "onka-react-admin-core";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var originalLog = console.error
console.error = function log(...args:any) {
  // TODO: upgrade loadable package
	if (args.length > 0 && typeof args[0] === "string" && /^Warning: Legacy/.test(args[0])) {
		return
	}
	originalLog.apply(console, args)
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>      
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
