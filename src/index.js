import { h, render } from "preact";

import "./index.css";
import App from "./App";

const appID = "app_root";

render(<App id={appID} />, document.body, document.getElementById(appID));
