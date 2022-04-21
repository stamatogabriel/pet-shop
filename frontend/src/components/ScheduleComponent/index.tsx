import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Select, { IOptions } from "../Select";

import getValidationError from "../../utils/getValidationErrors";

import { IPet } from "../../types/pet";

import { Container } from "./styles";
import Input from "../Input";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";

interface ScheduleComponentProps {
  pet: IPet;
  products: IOptions[];
}

const ScheduleComponent: React.FC<ScheduleComponentProps> = ({
  pet,
  products,
}) => {
  const formRef = useRef<FormHandles | any>();
  const { token } = useSelector((state: RootState) => state.auth)

  const handleSubmit = useCallback(async (data) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required("Informe o serviço"),
        schedule: Yup.date().required("Informe o dia e hora"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post("/sales/schedule", {
        user_id: pet.tutor._id,
        product_id: [data.product],
        pet_id: pet._id,
        schedule: data.schedule,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationError(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, [pet?._id, pet?.tutor?._id, token]);

  return (
    <Container>
      <h1>Agendar serviço</h1>
      <div>
        <h2>{pet?.name}</h2>
        <h3>Dados do tutor</h3>
        <p>Nome: {pet?.tutor?.name}</p>
        <p>Telefone: {pet?.tutor?.phone}</p>
        <p>Email: {pet?.tutor?.email}</p>
      </div>
      <Form ref={formRef} onSubmit={handleSubmit} autoComplete="false">
        <Select name="product" options={products} />
        <Input name="schedule" type="datetime-local" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default ScheduleComponent;
