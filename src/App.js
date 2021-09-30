import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Header color="red" text="Delete" />
    </div>
  );
}

export default App;
