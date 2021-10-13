import React from "react";
import { Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../context/user";

export const Header = () => {
  const history = useHistory();
  //If i want to use useContext
  // const { user } = React.useContext(UserContext);
  // const name = user && `${user.firstName} ${user.lastName}`;

  const userL = localStorage.getItem("login");
  const userLParse = JSON.parse(userL);
  const { firstName, lastName } = userLParse;
  console.log(firstName, lastName);

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
        <Text mr="1rem">{`${firstName} ${lastName}`}</Text>
        <Avatar
          size="xs"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Button>
    </Flex>
  );
};
