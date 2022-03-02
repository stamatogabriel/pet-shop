import React, { useCallback, useEffect, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { ButtonWrapper, Container, UserButton } from "./styles";
import Input from "../Input";
import { IPet, IPetRequest } from "../../types/pet";
import getValidationError from "../../utils/getValidationErrors";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";
import { toast } from "react-toastify";

interface PetEditProps {
  pet?: IPet;
  tutorId: string;
  closeModal(): void;
  getPets(): void;
}

const PetEdit: React.FC<PetEditProps> = ({
  pet,
  closeModal,
  getPets,
  tutorId,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormHandles | any>();
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (pet) formRef.current?.setData(pet);

    if (!pet) formRef.current.reset();
  }, [pet]);

  const handleEdit = useCallback(
    async (data: IPetRequest) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome deve ser informado"),
          age: Yup.string().required("Idade deve ser informada"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (pet) {
          await api.put(`/pets/${pet._id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        if (!pet) {
          data.tutor = tutorId;

          await api.post(`/pets`, data, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        getPets();
        setLoading(false);
        closeModal();
        toast.success("Pet salvo com sucesso");
      } catch (err) {
        setLoading(false);
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }

        toast.error("Não foi possível salvar o pet, tente novamente");
      }
    },
    [closeModal, getPets, pet, token, tutorId]
  );

  return (
    <Container>
      <h1>{!pet ? "Novo pet" : "Editando pet"}</h1>
      <Form ref={formRef} onSubmit={handleEdit} autoComplete="false">
        <Input name="name" placeholder="Nome" defaultValue={pet?.name} />
        <Input name="age" placeholder="Idade" defaultValue={pet?.age} />
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

export default PetEdit;
