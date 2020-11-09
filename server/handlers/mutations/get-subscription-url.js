// import "isomorphic-fetch";
require('isomorphic-fetch');
// import { gql } from "apollo-boost";
const { gql } = require('apollo-boost');

// export function RECURRING_CREATE(url) {
//   return gql`
//     mutation {
//       appSubscriptionCreate(
//           name: "Super Duper Plan"
//           returnUrl: "${url}"
//           test: true
//           lineItems: [
//           {
//             plan: {
//               appUsagePricingDetails: {
//                   cappedAmount: { amount: 10, currencyCode: USD }
//                   terms: "$1 for 1000 emails"
//               }
//             }
//           }
//           {
//             plan: {
//               appRecurringPricingDetails: {
//                   price: { amount: 10, currencyCode: USD }
//               }
//             }
//           }
//           ]
//         ) {
//             userErrors {
//               field
//               message
//             }
//             confirmationUrl
//             appSubscription {
//               id
//             }
//         }
//     }`;
// }


function RECURRING_CREATE(url) {
  return gql`
    mutation {
      appSubscriptionCreate(
          name: "Super Duper Plan"
          returnUrl: "${url}"
          test: true
          lineItems: [
          {
            plan: {
              appUsagePricingDetails: {
                  cappedAmount: { amount: 10, currencyCode: USD }
                  terms: "$1 for 1000 emails"
              }
            }
          }
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 10, currencyCode: USD }
              }
            }
          }
          ]
        ) {
            userErrors {
              field
              message
            }
            confirmationUrl
            appSubscription {
              id
            }
        }
    }`;
}

module.exports = RECURRING_CREATE;

// export const getSubscriptionUrl = async ctx => {
//   const { client } = ctx;
//   const confirmationUrl = await client
//     .mutate({
//       mutation: RECURRING_CREATE(process.env.HOST)
//     })
//     .then(response => response.data.appSubscriptionCreate.confirmationUrl);

//   return ctx.redirect(confirmationUrl);
// };

const getSubscriptionUrl = async ctx => {
  const { client } = ctx;
  const confirmationUrl = await client
    .mutate({
      mutation: RECURRING_CREATE(process.env.HOST)
    })
    .then(response => response.data.appSubscriptionCreate.confirmationUrl);

  return ctx.redirect(confirmationUrl);
};

module.exports = getSubscriptionUrl;