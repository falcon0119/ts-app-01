import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { useShowMessageConst } from "./useShowMessage";

export const UserAuthConst = () => {
  const navigate = useNavigate();
  const { showMessageConst } = useShowMessageConst();
  const [loading, setloading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setloading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessageConst({
              title: "ログインに成功しました",
              status: "success",
            });
            navigate("/home");
          } else {
            showMessageConst({
              title: "ユーザーが見つかりません",
              status: "warning",
            });
          }
        })
        .catch(() => {
          showMessageConst({
            title: "ログインできません",
            status: "error",
          });
        })
        .finally(() => setloading(false));
    },
    [navigate, showMessageConst]
  );
  return { loading, login };
};
