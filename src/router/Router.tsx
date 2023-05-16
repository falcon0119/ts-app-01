import { FC, memo, ReactNode } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginConst } from "../components/pages/Login";
import { HomeConst } from "../components/pages/Home";
import { ErrorConst } from "../components/pages/404";
import { HomeRouterConst } from "./HomeRouter";
import { HeaderLayoutConst } from "../components/template/HeaderLayout";
import { LoginUserProvider } from "../components/providers/LoginUserProvider";

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
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<LoginConst />} />

        <Route
          path="/home"
          element={
            <>
              <HeaderLayoutConst children={undefined} />
              <HomeConst />
            </>
          }
        />
        <Route
          path="/home/*"
          element={
            <>
              <HeaderLayoutConst children={undefined} />
              <HomeRoutesWrapper />
            </>
          }
        />
        <Route path="*" element={<ErrorConst />} />
      </Routes>
    </LoginUserProvider>
  );
});
