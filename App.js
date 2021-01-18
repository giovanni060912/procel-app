import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import Navigation from "./src/Components/navigation";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
