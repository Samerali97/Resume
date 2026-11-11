import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

// createRoot(document.getElementById("root")!).render(
//   // <StrictMode>
//   <App />
//   // </StrictMode>,
// );

const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(<App />);
