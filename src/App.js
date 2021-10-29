import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
