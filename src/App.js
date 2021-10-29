import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
