import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ onClick, ...props }) => (
  <CButton
    colorScheme="teal"
    onClick={onClick}
    {...props}
    mt={8}
    borderRadius={5}
    border={3}
    p={4}
    bg="gray.500"
    color="yellow.100"
    fontSize={30}
    fontWeight="semibold"
  >
    {props.children}
  </CButton>
);
