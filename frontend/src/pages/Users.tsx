import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UsersList from "../components/UsersList";
import api from "../services/api";
import { RootState } from "../store/modules/rootReducer";
import { IUser } from "../types/user";

// import { Container } from './styles';

const Users: React.FC = () => {
  // TODO tipar usuários
  const [users, setUsers] = useState<IUser[] | null>(null);
  const { token } = useSelector((state: RootState) => state.auth);

  const getUsers = useCallback(async () => {
    const response = await api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers(response.data);
  }, [token]);

  const deleteUser = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        getUsers();

        return toast.success("Usuário deletado com sucesso");
      } catch (error) {
        return toast.error(
          "Não foi possível excluir o usuário no momento, por favor, tente novamente mais tarde."
        );
      }
    },
    [getUsers]
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return <UsersList users={users} deleteUsers={deleteUser} />;
};

export default Users;
