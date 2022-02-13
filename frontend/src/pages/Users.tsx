import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UsersList from "../components/UsersList";
import Modal from "../components/Modal";
import api from "../services/api";
import { RootState } from "../store/modules/rootReducer";
import { IUser } from "../types/user";
import UserEdit from "../components/UserEdit";

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
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
    [getUsers, token]
  );

  const editUser = useCallback(
    async (user) => {
      setUserEdit(user);
      setOpenModal(true);
    },
    [setOpenModal, setUserEdit]
  );

  const handlecloseModal = useCallback(() => {
    setUserEdit(null)
    setOpenModal(false)
  }, [])

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <UsersList users={users} deleteUsers={deleteUser} editUser={editUser} />
      <Modal open={openModal} onClose={handlecloseModal}>
        <UserEdit user={userEdit} closeModal={handlecloseModal} getUsers={getUsers} />
      </Modal>
    </>
  );
};

export default Users;
