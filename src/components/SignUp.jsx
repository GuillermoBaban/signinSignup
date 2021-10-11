import React from "react";
import { Button, Input, Flex, Text, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();
  const { signup } = useAuth();

  const handleNavigateSignin = () => {
    history.push("/signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    signup(user)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        setErrors(e);
      })
      .finally(() => setLoading(false));
  };

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

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
      <Heading mb="2rem"> Signup </Heading>
      <Input onChange={handleFirstName} mb="1rem" placeholder="First Name" />
      <Input onChange={handleLastName} mb="1rem" placeholder="Last Name" />
      <Input onChange={handleEmail} mb="1rem" placeholder="Email" />
      <Input onChange={handlePassword} mb="1rem" placeholder="Password" />
      {errors.map((e, i) => (
        <Text color="red.400" key={i}>
          {e}
        </Text>
      ))}
      <p>
        Password must be 8 characters, at least one uppercase, at least one
        lowercase, at least one number, and at least special character.
      </p>
      <Button
        colorScheme="blue"
        mt={"20px"}
        type="submit"
        disabled={loading}
        isLoading={loading}
      >
        SignUp
      </Button>
      <Button
        mt="1rem"
        colorScheme="teal"
        variant="ghost"
        onClick={handleNavigateSignin}
      >
        Already have account? SignIn
      </Button>
    </Flex>
  );
}
