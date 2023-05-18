import { type } from "@testing-library/user-event/dist/type";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "../../api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setloginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setloginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setloginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
