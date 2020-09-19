import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IS_DEV } from "../constants";

export const client = new ApolloClient({
  uri: IS_DEV
    ? "http://localhost:3333/graphql"
    : process.env.REACT_APP_SERVER_ENDPOINT,
  cache: new InMemoryCache(),
});
