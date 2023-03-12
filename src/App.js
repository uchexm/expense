import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Sharp Sand",
      amount: 302.76,
      date: new Date(2023, 3, 9),
    },
    { id: "e2", title: "Cement", amount: 102.16, date: new Date(2023, 3, 10) },
    {
      id: "e3",
      title: "Grey Water",
      amount: 31.01,
      date: new Date(2023, 3, 10),
    },
    { id: "e4", title: "Gravel", amount: 459.33, date: new Date(2023, 3, 10) },
  ];
  return (
    <div className="App">
      <h2>lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
