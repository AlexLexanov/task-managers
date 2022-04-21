import { onError } from "@apollo/client/link/error";
import { client } from "./settings";
import { RefreshToken } from "./models/users";

const getNewToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return
    const { data: { refresh } } = await client.query({
      query: RefreshToken,
      variables: { refresh_token: refreshToken },
    })
    const { access_token, refresh_token } = refresh;
    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("refreshToken", refresh_token);
    return access_token;
  } catch(e) {
    localStorage.clear()
  }
};

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions.code) {
          case "UNAUTHENTICATED":
            const oldHeaders = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: getNewToken(),
              },
            });
            return forward(operation);
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);
