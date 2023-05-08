import { useCallback, useState } from "react";
import { user } from "../../api/user";
import axios from "axios";
import { useShowMessageConst } from "./useShowMessage";

type Props = {};

export const useAllusesdConst = () => {
  const { showMessageConst } = useShowMessageConst();
  const [loading, setloading] = useState(false);
  const [users, setusers] = useState<Array<user>>();
  const getUsers = useCallback((props: Props) => {
    // const {} = props;
    setloading(true);
    axios
      .get<Array<user>>("https://jsonplaceholder.typicode.com/users")
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
  return { getUsers };
};

// .get<Array<user>>("https://jsonplaceholder.typicode.com/users")
