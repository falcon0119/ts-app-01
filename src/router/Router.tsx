import { FC, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginConst } from "../components/pages/Login";
import { HomeConst } from "../components/pages/Home";

import { HomeRouterConst } from "./HomeRouter";

export const RouterConst: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<LoginConst />} />
      <Route path="/home/*">
        {HomeRouterConst.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
});
