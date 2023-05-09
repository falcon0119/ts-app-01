import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imageURL: string;
  textName: string;
  textOcupation: string;
  onClick: (id: number) => void;
};

export const UserCardConst: FC<Props> = memo((props) => {
  const { id, imageURL, textName, textOcupation, onClick } = props;

  return (
    <>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="20px"
        shadow="md"
        p="4"
        _hover={{ cusor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src={imageURL}
            alt="プロフィール画像"
            m="auto"
          ></Image>
          <Text fontSize="lg" fontWeight="bold">
            {textName}
          </Text>
          <Text fontSize="md" fontWeight="gray">
            {textOcupation}
          </Text>
        </Stack>
      </Box>
    </>
  );
});
