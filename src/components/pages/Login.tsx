import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { FC, memo } from "react";
import { PrimaryButtonConst } from "../atoms/button/PrimaryButton";
import { UserAuthConst } from "../hooks/userAuth";

export const LoginConst: FC = memo(() => {
  const OnClickLogin = () => login(userId);
  const [userId, setuserId] = useState("");
  const { login, loading } = UserAuthConst();
  const OnChangeuserId = (e: ChangeEvent<HTMLInputElement>) => {
    setuserId(e.target.value);
  };

  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("gray.50", "gray.900")}
      py={12}
      px={{ base: 4, lg: 8 }}
    >
      <Box maxW={"md"} mx={"auto"}>
        <Heading textAlign={"center"} mb={6}>
          ログイン
        </Heading>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py={8}
          px={6}
          borderRadius={8}
          boxShadow={"xl"}
        >
          <VStack spacing={6} alignItems={"stretch"}>
            <FormControl id="email">
              <FormLabel>メールアドレス</FormLabel>
              <Input value={userId} onChange={OnChangeuserId} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>パスワード</FormLabel>
              <Input type="password" autoComplete="current-password" required />
            </FormControl>
            <Stack spacing={6}>
              <PrimaryButtonConst
                onClick={OnClickLogin}
                loading={loading}
                disabled={userId === ""}
              >
                ログイン
              </PrimaryButtonConst>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
});
