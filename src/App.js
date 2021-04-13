import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shop/shop.component";
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}


export default App;
