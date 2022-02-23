import React, { useCallback, useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { ButtonWrapper, Container, UserButton } from "./styles";
import Input from "../Input";
import Select from "../Select";
import { IUser } from "../../types/user";
import getValidationError from "../../utils/getValidationErrors";
import api from "../../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";
import { toast } from "react-toastify";

interface UserEditProps {
  user?: IUser;
  closeModal(): void;
  getUsers(): void;
}

const UserEdit: React.FC<UserEditProps> = ({ user, closeModal, getUsers }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<FormHandles | any>();

  const { token } = useSelector((state: RootState) => state.auth);

  const handleEdit = useCallback(
    async (data: IUser) => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("Informe o seu email")
            .email("Informe um email válido"),
          name: Yup.string().required("Nome deve ser informado"),
          phone: Yup.string().required("Telefone deve ser informado"),
          roles: Yup.string().required("Função deve ser informada"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (user) {
          await api.put(
            `/users/${user._id}`,
            { ...data, roles: [data.roles] },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        }

        if (!user) {
          const passSchema = Yup.object().shape({
            password: Yup.string()
              .min(6, 'Senha deve conter 6 dígitos')
              .required("Informe a senha")
          });

          await passSchema.validate(data, {
            abortEarly: false,
          });

          await api.post(
            `/users`,
            { ...data, roles: [data.roles] },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        }

        setLoading(false);

        getUsers();
        closeModal();
        toast.success("Usuário salvo com sucesso");
      } catch (err) {
        setLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }

        toast.error("Não foi possível salvar o usuário, tente novamente");
      }
    },
    [closeModal, getUsers, token, user]
  );

  return (
    <Container>
      <h1>Editando usuário </h1>
      <Form ref={formRef} onSubmit={handleEdit} autoComplete="false">
        <Input name="name" placeholder="Nome" defaultValue={user?.name} />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          defaultValue={user?.email}
        />
        <Input
          name="phone"
          placeholder="Telefone"
          isPhone
          defaultValue={user?.phone}
        />
        {!user && <Input name="password" placeholder="Senha do usuário" type="password" />}
        <Select
          name="roles"
          placeholder="Função"
          defaultValue={user?.roles[0]}
          options={[
            { label: "Usuário", value: "user" },
            { label: "Administrador", value: "admin" },
          ]}
        />
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

export default UserEdit;
