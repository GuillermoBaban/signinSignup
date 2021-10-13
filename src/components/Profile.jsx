import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../context/user";

export const Profile = () => {
  const history = useHistory();
  const userL = localStorage.getItem("login");
  const userLParse = JSON.parse(userL);
  const { firstName, lastName } = userLParse;

  //if i want to use useContext
  // const { user, setUser } = React.useContext(UserContext);
  // const name = user && `${user.firstName} ${user.lastName}`;
  const handleSignOut = () => {
    // setUser(null);
    localStorage.setItem("login", "");
    history.push("/");
  };

  return (
    <Flex direction="column">
      <Text mt="20rem">{`${firstName} ${lastName}`}</Text>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Flex>
  );
};
