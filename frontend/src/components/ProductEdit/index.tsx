import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { ButtonWrapper, Container, UserButton } from "./styles";
import Input from "../Input";
import getValidationError from "../../utils/getValidationErrors";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";
import { toast } from "react-toastify";
import { IProduct } from "../../types/product";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";

interface ProductEditProps {
  product?: IProduct;
  closeModal(): void;
  getProducts(): void;
}

const ProductEdit: React.FC<ProductEditProps> = ({
  product,
  closeModal,
  getProducts,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormHandles | any>();
  const { token } = useSelector((state: RootState) => state.auth);

  const [showStock, setShowStock] = useState<boolean>(false);

  useEffect(() => {
    if (product) formRef.current?.setData(product);

    if (!product) formRef.current.reset();
  }, [product]);

  const handleEdit = useCallback(
    async (data: IProduct) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required("Título deve ser informado"),
          description: Yup.string().required("Descrição deve ser informada"),
          price: Yup.number()
            .min(0, "Não é possível registrar preço negativo")
            .required("Idade deve ser informada"),
          need_schedule: Yup.boolean().notRequired(),
          stock: Yup.number().when("need_schedule", {
            is: false,
            then: Yup.number()
              .min(0, "Não é possível registrar estoque negativo")
              .required("Informe o estoque"),
          }),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (product) {
          await api.put(`/products/${product._id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        if (!product) {
          await api.post(`/products`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        getProducts();
        setLoading(false);
        closeModal();
        toast.success("Produto salvo com sucesso");
      } catch (err) {
        setLoading(false);
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }

        toast.error("Não foi possível salvar o produto, tente novamente");
      }
    },
    [closeModal, getProducts, product, token]
  );

  return (
    <Container>
      <h1>{!product ? "Novo produto" : "Editando produto"}</h1>
      <Form
        ref={formRef}
        initialData={product}
        onSubmit={handleEdit}
        autoComplete="false"
      >
        <Input name="title" placeholder="Nome" defaultValue={product?.title} />
        <Textarea name="description" placeholder="Idade" />
        <Input name="price" placeholder="Preço" type="number" step="0.01" />
        <Checkbox
          name="need_schedule"
          label="Necessário agendamento?"
          onChange={(e) => setShowStock(e.target.checked)}
        />
        {!showStock && (
          <Input name="stock" placeholder="Estoque" type="number" />
        )}
        <ButtonWrapper>
          <UserButton type="submit" disabled={loading}>
            {loading ? "Carregando" : "Salvar"}
          </UserButton>
          <UserButton type="button" isCancel onClick={closeModal}>
            Cancelar
          </UserButton>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default ProductEdit;
