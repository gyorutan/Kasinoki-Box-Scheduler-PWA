import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ? (
        <>
          <div className="h-full">
            <div className="w-full">
              <main>{children}</main>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full">
          <Navbar />
          <div className="w-full">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
