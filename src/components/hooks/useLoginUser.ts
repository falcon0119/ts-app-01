import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

export const useLoginuser = (): LoginUserContextType =>
  useContext(LoginUserContext);
