import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./components/pages/mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/pages/searchpage";
import TimeCalculatorPage from "./components/pages/TimeCalculatorPage";
import CostCalculatorPage from "./components/pages/CostCalculatorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/timecalculator" element = {<TimeCalculatorPage/>} ></Route>
        <Route path ="/costcalculator" element = {<CostCalculatorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
