import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={UsersList} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
