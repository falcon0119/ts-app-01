import { Button, IconButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FC, memo } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolea;
  loading?: boolean;
};

export const PrimaryButtonConst: FC<Props> = memo((props) => {
  const { children, onClick, disabled, loading } = props;
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <>
      <Button
        type="button"
        bg={disabled ? "gray.300" : "teal.400"} // ここを修正
        size="lg"
        fontSize="md"
        color="white"
        disabled={disabled}
        isLoading={loading}
        onClick={handleClick}
      >
        {children}
      </Button>
    </>
  );
});
