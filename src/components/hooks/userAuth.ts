import axios from "axios";
import { useCallback, useState } from "react";
import { user } from "../../api/user";
import { useNavigate } from "react-router-dom";

export const UserAuthConst = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setloading(true);
      axios
        .get<user>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            console.log("Navigating to /home");
            navigate("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setloading(false));
    },
    [navigate]
  );
  return { loading, login };
};
