import React from 'react';

import fetch from "node-fetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";

import Head from 'next/head';

import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import Cookies from "js-cookie";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";

// const client = new ApolloClient({
//   fetch: fetch,
//   fetchOptions: {
//     credentials: "include",
//   },
// });
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // const shopOrigin = Cookies.get("shopOrigin");
    return (
      <React.Fragment>
        <Head>
            <title>OptimizeXP</title>
            <meta charSet="utf-8" />
          </Head>

          {/* <h1>OptimizeXP Test</h
          1> */}

          <AppProvider i18n={translations}>

            <Component {...pageProps} />

          </AppProvider>

          
        {/* <AppProvider i18n={translations}>
          <Provider
            config={{
              apiKey: API_KEY,
              shopOrigin: shopOrigin,
              forceRedirect: true,
            }}
          >
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </Provider>
        </AppProvider> */}
      </React.Fragment>
    );
  }
}

export default MyApp;
