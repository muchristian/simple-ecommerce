import { Modal as MD } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { savedContext } from "../context/savedContext";
import { getTotalSavedProducts } from "../utils/helper";

const SaveListModal = ({ isModalOpen, onCancel }) => {
  const { savedProducts, removeFromSaveList } = useContext(savedContext);
  return (
    <MD
      title="Saved List"
      open={isModalOpen}
      onCancel={onCancel}
      width={728}
      footer={<></>}
    >
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
              Price
            </th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {savedProducts.map((product) => (
            <tr
              key={product.id}
              className="text-sm sm:text-base text-gray-600 text-center"
            >
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <img
                  src={product.image}
                  alt={product.image}
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex`}
                />
                <span className="pt-1 hover:text-palette-dark">
                  {product.title}
                </span>
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <span>{product.price}</span>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() => removeFromSaveList(product)}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="w-6 h-6 text-red-500"
                  />
                </button>
              </td>
            </tr>
          ))}

          <tr className="text-center">
            <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
              Total Products
            </td>
            <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
              <span>
                {savedProducts.length === 0
                  ? 0
                  : getTotalSavedProducts(savedProducts)}
              </span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </MD>
  );
};

export default SaveListModal;
