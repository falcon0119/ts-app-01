import { useCallback, useState } from "react";
import { User } from "../../api/user";
import axios from "axios";
import { useShowMessageConst } from "./useShowMessage";

export const useAllusesdConst = () => {
  const { showMessageConst } = useShowMessageConst();
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    setloading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch(() => {
        showMessageConst({
          title: "ユーザ取得に失敗しました",
          status: "error",
        });
      })
      .finally(() => {
        // <-- ここで、catch の後に finally を直接チェーンしています。
        setloading(false);
      });
  }, []);
  return { getUsers, loading, users };
};
