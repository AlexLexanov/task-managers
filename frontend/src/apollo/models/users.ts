import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    SignIn(email: $email, password: $password) {
      email
      lastname
      firstname
      access_token
      refresh_token
    }
  }
`;

export const getAuthUser = gql`
  query getAuthUser {
    getAuthUser {
      lastname
      firstname
      email
    }
  }
`;

export const SET_AUTH = gql`
  query SetAuth {
    auth {
      isAuth
    }
  }
`;

export const RefreshToken = gql`
  query Refresh($refresh_token: String!) {
    refresh(refresh_token: $refresh_token) {
      refresh_token
      access_token
    }
  }
`;

export const Logout = gql`
  mutation logoutUser {
    logout
  }
`;
