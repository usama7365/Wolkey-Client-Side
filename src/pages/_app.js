import React, { useEffect , useState } from "react";
import GreenNav from "../components/Greennav";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "../components/ReduxProvider";
import SearchNav from "../components/Searchnav";
import Header from "../components/header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [headerWidth, setHeaderWidth] = useState("100%"); 
  const componentHeaderWidth = {
    // "/settings": "80%", 
    // "/balance":"80%"

  };
  // useEffect(() => {
  //   const currentRoute = router.pathname;
  //   const customWidth = componentHeaderWidth[currentRoute] || "100%"; // Default to 100% if no custom width defined
  //   setHeaderWidth(customWidth);
  // }, [router.pathname]);

  return (
    <>
      <div>
        <ReduxProvider>
          <GreenNav />
          <Header  width={headerWidth} />
          <SearchNav/>

          <Component {...pageProps} />

          <Footer />
        </ReduxProvider>
      </div>
    </>
  );
}

export default MyApp;
