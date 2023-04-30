import { FC, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginConst } from "../components/pages/Login";
import { HomeConst } from "../components/pages/Home";
import { ErrorConst } from "../components/pages/404";
import { HomeRouterConst } from "./HomeRouter";

const HomeRoutesWrapper: FC = () => {
  return (
    <Routes>
      {HomeRouterConst.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export const RouterConst: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<LoginConst />} />
      <Route path="/home" element={<HomeConst />} />
      <Route path="/home/*" element={<HomeRoutesWrapper />} />
      <Route path="*" element={<ErrorConst />} />
    </Routes>
  );
});
