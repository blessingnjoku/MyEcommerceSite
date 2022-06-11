import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Switch>
    </Router>
  );
}

export default App;
