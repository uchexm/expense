import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Sharp Sand", amount: 302.76, date: new Date(2023, 3, 9) },
    { title: "Cement", amount: 102.16, date: new Date(2023, 3, 10) },
    { title: "Grey Water", amount: 31.01, date: new Date(2023, 3, 10) },
    { title: "Gravel", amount: 459.33, date: new Date(2023, 3, 10) },
  ];
  return (
    <div className="App">
      <h2>lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
