import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, Header, SignIn, SignUp, Layout } from "./";
import { UserContext } from "../context/user";
import { Spacer } from "@chakra-ui/react";
export const App = () => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <SignIn />
            </Route>
            <Route path="/main">
              <Header />
              <Spacer />
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile">
              <Header />
              <Profile />
              <Spacer />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </UserContext.Provider>
  );
};
