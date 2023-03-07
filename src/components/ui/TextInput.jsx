import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="flushed"
    onChange={onChange}
    {...props}
    w={400}
    mb={50}
    color="cyan.500"
    fontSize={30}
    borderRadius={10}
    border="solid"
  />
);
