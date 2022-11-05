import CreateGif from "pages/createGif";
import FunnyGifs from "pages/funnyGifs";
import Home from "pages/home";
import Layout from "pages/layout/Layout";
import SportsGifs from "pages/sportsGifs";
import React from "react";
import { Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sports" element={<SportsGifs />} />
        <Route path="/funny" element={<FunnyGifs />} />
        <Route path="/create" element={<CreateGif />} />
      </Route>
    </Routes>
  );
};

export default Router;
