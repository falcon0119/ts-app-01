import {
  Flex,
  Heading,
  Avatar,
  Stack,
  Link,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { FC, memo } from "react";
import { HumburgerMenueConst } from "../../atoms/button/HumburgerMenue";
import { MenueDrawerConst } from "../../molecules/MenueDrawer";
import { useNavigate } from "react-router-dom";

export const HeaderConst: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClicSetting = useCallback(
    () => navigate("/home/setting"),
    [navigate]
  );
  const onClickUserManagement = useCallback(
    () => navigate("/home/user_management"),
    [navigate]
  );
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.200"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザ管理アプリ
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>

          <Link onClick={onClicSetting}>設定</Link>
        </Flex>
        <Flex>
          <Stack direction="row">
            <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
            <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
            <Avatar src="https://bit.ly/broken-link" />
          </Stack>
        </Flex>
        <HumburgerMenueConst onOpen={onOpen} />
      </Flex>
      <MenueDrawerConst
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClicSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
