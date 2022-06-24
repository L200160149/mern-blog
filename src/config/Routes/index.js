import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../../pages";

const Routes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login">
                <Login/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>

            <Route path="/">
                <Home/>
            </Route>
        </Routes>
    </Router>
  )
}

export default Routes