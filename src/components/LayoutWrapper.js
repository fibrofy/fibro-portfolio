import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
