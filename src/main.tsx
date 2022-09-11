import { StrictMode } from "react";
import { render } from "react-dom";

import "./styles.css";

import { App } from "./App";

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("container"),
);
