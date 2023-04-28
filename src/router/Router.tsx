import { FC, memo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginConst } from "../components/pages/Login";

export const RouterConst: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<LoginConst />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
});
