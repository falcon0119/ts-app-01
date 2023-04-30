import React, { ReactNode } from "react";
import { FC, memo } from "react";
import { HeaderConst } from "../organism/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayoutConst: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <HeaderConst />
      {children}
    </>
  );
});
