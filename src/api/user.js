// @Flow

import client from "./utils";

export const registerCall = (name, email, password) =>
  client.mutate(
    `
    {
      createUser(
        name: "${name}",
        authProvider: {
        	email: {
            email: "${email}",
            password: "${password}"
          }}) {
        id
        password
        email
      }
    }
  `
  );

export const loginCall = (email: string, password: string) =>
  client.mutate(
    `
    {
      signinUser(
        	email: {
            email: "${email}",
            password: "${password}"
          }) {
        user {
          id,
          name,
          email
        },
        token
      }
    }
  `
  );

export const loggedIn = () =>
  client.query(`
    query {
        user {
            name
        }
    }
`);
