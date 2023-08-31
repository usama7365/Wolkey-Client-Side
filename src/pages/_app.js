import React from "react";
import GreenNav from "../components/Greennav";
import OrangeNav from "../components/Orangenav";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "../components/ReduxProvider";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <GreenNav />
        <OrangeNav />
        <ReduxProvider>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxProvider>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
