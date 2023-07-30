import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { savedContext } from "../context/savedContext";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const { cartProducts } = useContext(cartContext);
  const { savedProducts } = useContext(savedContext);
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          disabledCart={
            cartProducts.filter((prod) => prod.id === product.id).length > 0
              ? true
              : false
          }
          disabledSaveList={
            savedProducts.filter((saved) => saved.id === product.id).length > 0
              ? true
              : false
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
