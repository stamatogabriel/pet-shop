import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";

import FloatButton from "../components/FloatButton";
import ProductsList from "../components/ProductsList";
import ProductEdit from "../components/ProductEdit";
import Modal from "../components/Modal";

import api from "../services/api";

import { RootState } from "../store/modules/rootReducer";

import { IProduct } from "../types/product";
import Loading from "../components/Loading";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [productEdit, setProductEdit] = useState<IProduct | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [token]);

  const deleteUser = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        getProducts();

        return toast.success("Usuário deletado com sucesso");
      } catch (error) {
        return toast.error(
          "Não foi possível excluir o usuário no momento, por favor, tente novamente mais tarde."
        );
      }
    },
    [getProducts, token]
  );

  const editProduct = useCallback(
    async (product) => {
      setProductEdit(product);
      setOpenModal(true);
    },
    [setOpenModal, setProductEdit]
  );

  const handleNewUser = useCallback(() => {
    setProductEdit(null);
    setOpenModal(true);
  }, []);

  const handlecloseModal = useCallback(() => {
    setProductEdit(null);
    setOpenModal(false);
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <ProductsList products={products} deleteProduct={deleteUser} editProduct={editProduct} />
      )}
      <FloatButton click={handleNewUser}>
        <AiOutlinePlus size={30} />
      </FloatButton>
      <Modal open={openModal} onClose={handlecloseModal}>
        <ProductEdit
          product={productEdit}
          closeModal={handlecloseModal}
          getProducts={getProducts}
        />
      </Modal>
    </>
  );
};

export default Products;
