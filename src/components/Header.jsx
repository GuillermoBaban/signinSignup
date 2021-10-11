import React from "react";
import { Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

export const Header = () => {
  const history = useHistory();
  const { user } = React.useContext(UserContext);

  const name = user && `${user.firstName} ${user.lastName}`;

  const handleNavigateHome = () => {
    history.push("/main");
  };

  const handleNavigateProfile = () => {
    history.push("/profile");
  };
  return (
    <Flex
      w="full"
      bg="orange.200"
      direction="row"
      justify="space-between"
      p="1rem 3rem"
    >
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        onClick={handleNavigateHome}
      />
      <Button
        colorScheme="teal"
        variant="ghost"
        onClick={handleNavigateProfile}
      >
        <Text mr="1rem">{name || "Profile"}</Text>
        <Avatar
          size="xs"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Button>
    </Flex>
  );
};
