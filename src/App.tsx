import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/global";
import { defaultTheme } from "./components/styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
