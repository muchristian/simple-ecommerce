const ProductImage = ({ imageNode }) => {
  return (
    <img
      src={imageNode}
      alt={imageNode}
      layout="fill"
      className="h-[280px] w-full transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
    />
  );
};

export default ProductImage;
