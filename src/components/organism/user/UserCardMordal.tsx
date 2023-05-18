import {
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
import React, { FC, memo, useCallback } from "react";
import { useSelectedUsers } from "../../hooks/useselectedUsers";
import { User } from "../../../api/user";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
};

export const UserCardMordalConst: FC<Props> = memo((props) => {
  const { isOpen, onClose, user, isAdmin } = props;
  //   const { selectedUsers, getSelectedUsers } = useSelectedUsers;
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        console.log(isAdmin)
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>username</FormLabel>
              <Input
                ref={initialRef}
                placeholder="username"
                defaultValue={user?.username}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>name</FormLabel>
              <Input placeholder="name" defaultValue={user?.name} />
            </FormControl>
          </ModalBody>

          {isAdmin && (
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
