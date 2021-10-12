import React from "react";
import {
  Button,
  Input,
  Flex,
  Text,
  Heading,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../context/user";

export function SignIn() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);

  const { setUser } = React.useContext(UserContext);
  const history = useHistory();
  const { signin } = useAuth();

  const handleNavigateSignUp = () => {
    history.push("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setError(null);
    setLoading(true);

    signin(email, password)
      .then((user) => {
        setError(null);
        setLoading(false);
        setUser(user);
        history.push("/main");
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  };
  const handlePassword = (e) => setPassword(e.target.value);

  const handleEmail = (e) => setEmail(e.target.value);

  return (
    <Flex
      name="form"
      as="form"
      w="500px"
      p="1rem"
      direction="column"
      bg="white"
      border="1px solid black"
      borderRadius="4px"
      textAlign="center"
      onSubmit={handleSubmit}
    >
      <Text> Welcome to my page </Text>
      <Heading mb="2rem"> Signin </Heading>
      <InputGroup size="md">
        <Input mb="1rem" placeholder="Email" onChange={handleEmail} />
      </InputGroup>
      <InputGroup size="md">
        <Input
          mb="1rem"
          placeholder="Password"
          type={showPass ? "text" : "password"}
          onChange={handlePassword}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        colorScheme="teal"
        type="submit"
        disabled={loading}
        isLoading={loading}
      >
        SignIn
      </Button>
      {error ? <Text color="red.400">{error}</Text> : null}
      <Button
        mt="1rem"
        colorScheme="teal"
        variant="ghost"
        onClick={handleNavigateSignUp}
      >
        First time here? SignUp
      </Button>
    </Flex>
  );
}
