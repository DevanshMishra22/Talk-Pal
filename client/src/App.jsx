import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoutes from "./components/auth/ProtectRoutes";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
import "./styles/Login.css";
import "./App.css";
import "./index.css";

let user = false;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoutes user={user}>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Group />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
