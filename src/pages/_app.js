import LayoutWrapper from "../components/LayoutWrapper";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}

export default App;
