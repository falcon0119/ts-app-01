import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
};

export const useShowMessageConst = () => {
  const toast = useToast();

  const showMessageConst = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "bottom",
        duration: 9000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessageConst };
};
