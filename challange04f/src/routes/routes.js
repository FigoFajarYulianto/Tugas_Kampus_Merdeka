import React from "react";
import Home from "../components/Home/home";
import Pencarian from "../components/pencari/pencarian";
import Defaultlayout from "../layouts/Default";
import Detail from "../components/detail/detailmobil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Defaultlayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Pencarian />} />
          <Route path="cars/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
