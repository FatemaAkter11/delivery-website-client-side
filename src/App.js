import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import AddService from './pages/AddService/AddService';
import Services from './pages/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderPlace from './pages/OrderPlace/OrderPlace';
import Banner from './pages/Banner/Banner';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import MyOrder from './pages/MyOrder/MyOrder';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Banner></Banner>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/orderplace/:serviceId">
              <OrderPlace></OrderPlace>
            </PrivateRoute>

            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
