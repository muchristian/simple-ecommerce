import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showCartModal, showSavedListModal }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar
        openCartModal={showCartModal}
        openSavedListModal={showSavedListModal}
      />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
