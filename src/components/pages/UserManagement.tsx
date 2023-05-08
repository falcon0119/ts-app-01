import {
  Box,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FC, memo } from "react";
import { UserCardConst } from "../organism/user/UserCard";

export const UserManagementConst: FC = memo(() => {
  return (
    <Wrap p={{ base: "4", bg: "10" }}>
      <WrapItem>
        <UserCardConst
          imageURL="https://flamme.co.jp/common/profile/minami_tanaka.jpg"
          textName="田中みなみ"
          textOcupation="タレント"
        />
      </WrapItem>
    </Wrap>
  );
});
