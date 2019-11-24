import React from "react";
import { render } from "react-dom";
import DateRangeSelector from "./components/DateRangeSelector";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles.css";

const App = () => (
  <div className="app">
    <h2>Date Range Picker</h2>
    <DateRangeSelector />
  </div>
);

render(<App />, document.getElementById("root"));
