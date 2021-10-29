import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Header></Header>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
