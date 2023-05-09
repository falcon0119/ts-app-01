import { useCallback, useState } from "react";
import { User } from "../../api/user";
import axios from "axios";
import { useShowMessageConst } from "./useShowMessage";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectedUsers = () => {
  const [selectedUser, setselectedUser] = useState<User | null>(null);
  const getSelectedUsers = (props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setselectedUser(targetUser!);
    onOpen();
  };

  return { selectedUser, getSelectedUsers };
};
