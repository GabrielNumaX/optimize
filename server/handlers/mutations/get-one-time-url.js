// import "isomorphic-fetch";
require('isomorphic-fetch');
// import { gql } from "apollo-boost";
const { gql } = require('apollo-boost');

// export function ONETIME_CREATE(url) {
//   return gql`
//     mutation {
//       appPurchaseOneTimeCreate(
//         name: "test"
//         price: { amount: 10, currencyCode: USD }
//         returnUrl: "${url}"
//         test: true
//       ) {
//         userErrors {
//           field
//           message
//         }
//         confirmationUrl
//         appPurchaseOneTime {
//           id
//         }
//       }
//     }
//   `;
// }

function ONETIME_CREATE(url) {
  return gql`
    mutation {
      appPurchaseOneTimeCreate(
        name: "test"
        price: { amount: 10, currencyCode: USD }
        returnUrl: "${url}"
        test: true
      ) {
        userErrors {
          field
          message
        }
        confirmationUrl
        appPurchaseOneTime {
          id
        }
      }
    }
  `;
}

module.exports = ONETIME_CREATE;

// export const getOneTimeUrl = async (ctx) => {
//   const { client } = ctx;
//   const confirmationUrl = await client
//     .mutate({
//       mutation: ONETIME_CREATE(process.env.HOST),
//     })
//     .then((response) => response.data.appPurchaseOneTimeCreate.confirmationUrl);
//   return ctx.redirect(confirmationUrl);
// };

const getOneTimeUrl = async (ctx) => {
  const { client } = ctx;
  const confirmationUrl = await client
    .mutate({
      mutation: ONETIME_CREATE(process.env.HOST),
    })
    .then((response) => response.data.appPurchaseOneTimeCreate.confirmationUrl);
  return ctx.redirect(confirmationUrl);
};

module.exports = getOneTimeUrl