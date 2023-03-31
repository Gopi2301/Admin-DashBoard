import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Login from "./pages/login/login";
import New from "./pages/new/new";
import Single from "./pages/single/single";
import  "./pages/styles/dark.scss"
import Tables from "./component/table/table";
function App() {
  return (
    <div className="app dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List />}></Route>
          <Route path=":userid" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="/product">
          <Route index element={<Tables />}></Route>
          <Route path=":productid" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
