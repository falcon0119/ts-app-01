import {
  Box,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Center,
  Text,
  Spinner,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { FC, memo } from "react";
import { UserCardConst } from "../organism/user/UserCard";
import { useAllusesdConst } from "../hooks/useAllusers";
import { UserCardMordalConst } from "../organism/user/UserCardMordal";
import { useSelectedUsers } from "../hooks/useselectedUsers";

export const UserManagementConst: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllusesdConst();
  const { getSelectedUsers, selectedUser } = useSelectedUsers();
  const onClickUser = useCallback(
    (id: number) => {
      // alert(id);
      getSelectedUsers({ users, id, onOpen });
    },
    [users, getSelectedUsers, onOpen]
  );

  useEffect(() => getUsers(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: "4", bg: "10" }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCardConst
                id={user.id}
                imageURL="https://flamme.co.jp/common/profile/minami_tanaka.jpg"
                textName={user.name}
                textOcupation={user.username}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserCardMordalConst
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
});
