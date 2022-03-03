import { useEffect } from "react";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  useEffect(() => {
    return (document.title = "NextJS");
  });

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
