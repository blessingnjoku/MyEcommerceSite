import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout">
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/">
            <NavBar />
            <HomePage />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
