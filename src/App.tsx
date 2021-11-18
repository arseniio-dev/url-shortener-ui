import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Auth from "./Containers/Auth/Auth";
import Create from "./Containers/Create/Create";
import Main from "./Containers/Main/Main";
import Profile from "./Containers/Profile/Profile";
import Layout from "./hoc/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Layout>
  );
};

export default App;
