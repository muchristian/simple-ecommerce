import { useState, useEffect, useCallback } from "react";
import Layout from "./components/Layout";
import CartModal from "./components/CartModal";
import SavedListModal from "./components/SavedListModal";
import PageHeader from "./components/PageHeader";
import ProductList from "./components/ProductList";
import CartContextProvider from "./context/cartContext";
import SavedContextProvider from "./context/savedContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSavedListModalOpen, setIsSavedListModalOpen] = useState(false);
  const fetchData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const response = await data.json();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showCartModal = useCallback(() => {
    setIsCartModalOpen((prevState) => !prevState);
  }, [isCartModalOpen]);

  const showSavedListModal = useCallback(() => {
    setIsSavedListModalOpen((prevState) => !prevState);
  }, [isSavedListModalOpen]);

  return (
    <CartContextProvider>
      <SavedContextProvider>
        <Layout
          showCartModal={showCartModal}
          showSavedListModal={showSavedListModal}
        >
          <div className="mx-auto max-w-6xl">
            <CartModal isModalOpen={isCartModalOpen} onCancel={showCartModal} />
            <SavedListModal
              isModalOpen={isSavedListModalOpen}
              onCancel={showSavedListModal}
            />
            <PageHeader />
            <ProductList products={products} />
          </div>
        </Layout>
      </SavedContextProvider>
    </CartContextProvider>
  );
};

export default App;
