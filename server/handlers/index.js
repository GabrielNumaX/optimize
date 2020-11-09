// import { createClient } from "./client";
const { createClient } = require('./client');
// import { getOneTimeUrl } from "./mutations/get-one-time-url";
const { getOneTimeUrl } = require('./mutations/get-one-time-url');
// import { getSubscriptionUrl } from "./mutations/get-subscription-url";
const { getSubscriptionUrl } = require('./mutations/get-subscription-url');
// import { registerWebhooks } from "./register-webhooks";
const { registerWebhooks } = require('./register-webhooks');

// export { createClient, getOneTimeUrl, getSubscriptionUrl, registerWebhooks };

module.exports = { createClient, getOneTimeUrl, getSubscriptionUrl, registerWebhooks };
