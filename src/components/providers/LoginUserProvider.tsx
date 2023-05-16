import { type } from "@testing-library/user-event/dist/type";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "../../api/user";

export type LoginUserContextType = {
  loginUser: User | null;
  setloginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setloginUser] = useState<User | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setloginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
