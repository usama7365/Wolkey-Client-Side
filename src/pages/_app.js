import React from "react";
import GreenNav from "../components/Greennav";

import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "../components/ReduxProvider";
import { ThemeProvider } from "next-themes";
import SearchNav from "../components/Searchnav";
import Header from "../components/header";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <ReduxProvider>
          <GreenNav />
          <Header />
          <SearchNav />
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>

          <Footer />
        </ReduxProvider>
      </div>
    </>
  );
}

export default MyApp;
