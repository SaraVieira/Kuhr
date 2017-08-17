// @Flow

import client from "./utils";

export const getPayments = () =>
  client
    .query(
      `
    query {
        user {
            paymentses {
              name,
              price,
              period
            }
        }
    }
`
    )
    .then(
      rsp =>
        rsp.user.paymentses &&
        rsp.user.paymentses.map(user => ({
          ...user,
          period: user.period / 12
        }))
    );
