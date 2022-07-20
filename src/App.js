import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import React from 'react'
import ReactDOM from 'react-dom';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import { useStateValue } from "./StateProvider";
import Footer from './Footer';

const promise = loadStripe("pk_test_51LJ6VBSHowKt9hEeiRC3DAykUe95cScY5vO4AqUgepk55wWV5PutsWvzVfkzryOdMAAi9UaEkM3xYKuwYC531ix300YfmWFcSe");
function App() {
  const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
        <Route path='/orders'>
           <Orders/>          
          </Route>
        <Route path='/login'>
           <Login/>          
          </Route>
          <Route path='/checkout'>
            <Checkout/>           
          </Route>
          <Route path='/payment'>
          <Elements stripe={promise}>
          <Payment/> 
          </Elements>
          
          </Route>
          
          <Route path='/'>
        
            <Home />
          </Route>
        </Switch>
<Footer/>
      </div>
    </Router>
  );
}

export default App;
