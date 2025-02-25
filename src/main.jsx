import { createRoot } from "react-dom/client";
import { App } from "./components/app/App";
import { StrictMode } from "react";

import "./styles/global.scss";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
