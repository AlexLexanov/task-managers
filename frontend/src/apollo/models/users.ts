import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SIGNIn($email: String!, $password: String!) {
    SIGNIn(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGNUp($email: String!, $password: String!, $lastname: String!, $firstname: String!) {
    SIGNUp(email: $email, password: $password, lastname: $lastname, firstname: $firstname) {
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
