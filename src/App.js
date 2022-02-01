import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="detail/:id" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="*"
            element={
              <>
                <h1>Error! you have entered invalid page</h1>
              </>
            }
          ></Route>
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
