import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";


const RootLayout = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayout;