import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectRoutes from "./components/auth/ProtectRoutes";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));
import "./styles/Login.css";
import "./App.css";
import "./index.css";
import Loader from "./components/layout/Loader";

let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader></Loader>}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
