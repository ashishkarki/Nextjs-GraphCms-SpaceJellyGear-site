import { ApolloClient, InMemoryCache } from "@apollo/client";

import { PRODUCTS_QUERY } from "./queries";
import { GRAPHCMS_API_ENDPOINT } from "./constants";

export const setClientAndGetData = async (
  graphQlQuery = PRODUCTS_QUERY,
  variables = null,
  uri = GRAPHCMS_API_ENDPOINT,
  cache = new InMemoryCache()
) => {
  const client = new ApolloClient({
    uri: uri,
    cache: cache,
  });
  const queryObj = {
    query: graphQlQuery,
  };

  if (variables) {
    queryObj.variables = variables;
  }

  return await client.query(queryObj);
};
