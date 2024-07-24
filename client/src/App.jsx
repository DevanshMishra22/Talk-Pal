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
import NotFound from "./pages/NotFound";

let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoutes user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Group />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectRoutes user={!user} redirect="/">
              <Login />
            </ProtectRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
