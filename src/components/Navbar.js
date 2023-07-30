import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { cartContext } from "../context/cartContext";
import { savedContext } from "../context/savedContext";
import { getCartTotal, getTotalSavedProducts } from "../utils/helper";

const Navbar = ({ openCartModal, openSavedListModal }) => {
  const { cartProducts } = useContext(cartContext);
  const { savedProducts } = useContext(savedContext);
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white h-[60px]">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 h-full">
        <Logo title={"Simplified E-commerce"} />
        <div className="flex items-center gap-4">
          <div
            className="flex relative cursor-pointer"
            onClick={openSavedListModal}
          >
            <FontAwesomeIcon
              className="text-palette-primary w-6 h-6 m-auto"
              icon={faHeart}
            />
            <div className="absolute flex flex-col justify-center items-center -top-[6px] -right-[6px] bg-red-500 rounded-full w-[16px] h-[16px]">
              <span className="text-white text-[11px]">
                {savedProducts.length === 0
                  ? 0
                  : getTotalSavedProducts(savedProducts)}
              </span>
            </div>
          </div>
          <div
            onClick={openCartModal}
            className="flex items-center relative cursor-pointer gap-1"
            aria-label="cart"
          >
            <FontAwesomeIcon
              className="text-palette-primary w-6 h-6 m-auto"
              icon={faShoppingCart}
            />
            <span className="text-sm">
              ${cartProducts.length === 0 ? 0 : getCartTotal(cartProducts)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
