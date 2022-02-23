import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlinePlus } from "react-icons/ai";

import UsersList from "../components/UsersList";
import Modal from "../components/Modal";
import UserEdit from "../components/UserEdit";
import FloatButton from "../components/FloatButton";

import api from "../services/api";

import { RootState } from "../store/modules/rootReducer";

import { IUser } from "../types/user";
import SwitchUsers from "../components/SwitchUsers";
import Loading from "../components/Loading";

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [userType, setUserType] = useState<"user" | "admin" | "client">("user");
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/users?roles=${userType}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [token, userType]);

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

  const handleNewUser = useCallback(() => {
    setUserEdit(null);
    setOpenModal(true);
  }, []);

  const handlecloseModal = useCallback(() => {
    setUserEdit(null);
    setOpenModal(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <SwitchUsers changeUserType={setUserType} userType={userType} />
      {loading && <Loading />}
      {!loading && (
        <UsersList users={users} deleteUsers={deleteUser} editUser={editUser} />
      )}
      <FloatButton click={handleNewUser}>
        <AiOutlinePlus size={30} />
      </FloatButton>
      <Modal open={openModal} onClose={handlecloseModal}>
        <UserEdit
          user={userEdit}
          closeModal={handlecloseModal}
          getUsers={getUsers}
        />
      </Modal>
    </>
  );
};

export default Users;
