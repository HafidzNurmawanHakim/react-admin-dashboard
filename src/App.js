import { useState } from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import "./App.css";
import SideNavbar from "./Components/SideNavbar";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Register from "./Pages/Register";

const Div = styled.div`
  width: 78vw;
  height: 100vh;
  float: right;
  transition: 0.3s;
`;
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <SideNavbar show={show} setShow={setShow} />
      <Div style={{ width: `${show ? "78vw" : "96%"}` }}>
        <Main />
      </Div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
