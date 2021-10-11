import React from "react";
import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import { getPosts } from "../api/posts";

export const Home = () => {
  const [state, setState] = React.useState({
    posts: [],
    loading: false,
    error: null,
  });
  const { posts, loading, error } = state;

  React.useEffect(() => {
    const doFetchPosts = async () => {
      setState({ loading: true, posts: [], error: null });
      try {
        const { data } = await getPosts();
        setState({ loading: false, posts: data, error: null });
      } catch (err) {
        setState({ loading: false, posts: [], error: err.message });
      }
    };

    doFetchPosts();
  }, []);

  if (loading) {
    <Spinner size="xl" />;
  } else if (error) {
    <h1>{error}</h1>;
  }
  return (
    <Flex direction="column">
      {posts.map((posts) => (
        <Flex
          key={posts.id}
          direction="column"
          m="0.5rem"
          border="1px solid #c2c2c2"
          p="3"
          borderRadius="1rem"
        >
          <Heading as="h3" size="lg">
            {posts.title}
          </Heading>
          <Text>{posts.body}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
