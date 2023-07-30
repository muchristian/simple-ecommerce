import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { savedContext } from "../context/savedContext";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = ({ product, disabledCart, disabledSaveList }) => {
  const title = product.title;
  const description = product.description;
  const price = product.price;
  const imageNode = product.image;

  const { addToCart } = useContext(cartContext);
  const { addToSaveList } = useContext(savedContext);

  const addToCartHandler = () => addToCart(product);
  const addToSaveListHandler = () => addToSaveList(product);

  return (
    <div className="rounded shadow-sm mx-auto border border-palette-lighter">
      <div className="relative px-4 py-4">
        <ProductImage imageNode={imageNode} />
      </div>
      <ProductInfo
        title={title}
        description={description}
        price={price}
        addToCart={addToCartHandler}
        addToSaveList={addToSaveListHandler}
        disabledCart={disabledCart}
        disabledSaveList={disabledSaveList}
      />
    </div>
  );
};

export default ProductCard;
