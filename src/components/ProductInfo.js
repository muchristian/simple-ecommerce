import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = ({
  title,
  description,
  price,
  addToCart,
  addToSaveList,
  disabledCart,
  disabledSaveList,
}) => {
  return (
    <div className="flex flex-col pt-6 relative gap-4">
      <div className="font-primary text-palette-primary text-lg font-semibold px-4">
        {title}
      </div>
      <div className="description text-base text-gray-600 font-primary font-light px-4">
        {description}
      </div>
      <div className="flex justify-between border-t">
        <div className="basis-6/12 flex justify-center border py-2">
          $
          <span className="font-primary font-medium text-lg text-palette-dark">
            {price}
          </span>
        </div>
        <button
          type="button"
          className="basis-3/12 rounded-sm border py-2 disabled:opacity-75"
          onClick={() => addToSaveList()}
          disabled={disabledSaveList}
        >
          <FontAwesomeIcon
            className="text-palette-primary w-6 h-6 m-auto"
            icon={faHeart}
          />
        </button>
        <button
          type="button"
          className="basis-3/12 rounded-0 border py-2 disabled:opacity-75"
          onClick={() => addToCart()}
          disabled={disabledCart}
        >
          <FontAwesomeIcon
            className="text-palette-primary w-6 h-6 m-auto"
            icon={faShoppingCart}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
