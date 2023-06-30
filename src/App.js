import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import VIndex from "./components/VisIndex";
import SCode from "./components/SCode"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/VisIndex" exact component={VIndex} />
          <Route path="/Code" exact component={SCode} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
