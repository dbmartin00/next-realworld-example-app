import Head from "next/head";
import React from "react";

import Layout from "components/common/Layout";
import ContextProvider from "lib/context";
import "styles.css";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const uuid = uuidv4();

import { SplitFactoryProvider } from '@splitsoftware/splitio-react';
const sdkConfig: SplitIO.IBrowserSettings = {
  core: {
    authorizationKey: 'kbef92s0e0gum4h7o7hqqeuc6uvbdmjmvfaj',
    key: uuidv4()
  }
};

if (typeof window !== "undefined") {
  require("lazysizes/plugins/attrchange/ls.attrchange.js");
  require("lazysizes/plugins/respimg/ls.respimg.js");
  require("lazysizes");
}

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <SplitFactoryProvider config={sdkConfig} >    
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </SplitFactoryProvider>  
  </>
);

export default MyApp;
