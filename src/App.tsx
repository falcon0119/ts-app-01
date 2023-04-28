import React from "react";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import theme from "./theme/theme";
import { Navigate, Route } from "react-router-dom";
import { LoginConst } from "./components/pages/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginConst />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
