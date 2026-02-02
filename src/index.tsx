import { render } from "preact";
import { AppShell } from "./components";
import { ThemeProvider } from "./contexts";
import "./style.css";

export function App() {
  return (
    <AppShell />
  );
}

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
