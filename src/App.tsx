import React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import theme from "./theme/theme";
import { Navigate, Route } from "react-router-dom";
import { RouterConst } from "./router/Router";
import { LoginConst } from "./components/pages/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RouterConst />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
