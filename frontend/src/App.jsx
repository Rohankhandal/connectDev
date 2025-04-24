import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        {/* //all routes will be relative to this path */}
        <Routes>
          <Route path="/" element={<Body />}>
            {/* //Children routes will render in Outlet */}
            <Route
              path="/login"
              element={
                <div>
                  <Login />
                </div>
              }
            />
            <Route
              path="/profile"
              element={
                <div>
                  <Profile />
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
