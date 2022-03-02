import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../components/Modal";
import PetEdit from "../components/PetEdit";
import PetsList from "../components/PetsList";
import api from "../services/api";
import { RootState } from "../store/modules/rootReducer";
import { IPet } from "../types/pet";

const Pets: React.FC = () => {
  const [pets, setPets] = useState<IPet[] | null>(null);
  const [petEdit, setPetEdit] = useState<IPet | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { token } = useSelector((state: RootState) => state.auth);

  const getPets = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(`/pets`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response.data);

      setPets(response.data.pets);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Algo deu errado. Tente novamente mais tarde.");
    }
  }, [token]);

  const handleCloseModal = useCallback(() => {
    setPetEdit(null);
    setOpenModal(false);
  }, []);

  const deletePet = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/pets/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        getPets();

        return toast.success("Pet deletado com sucesso");
      } catch (error) {
        return toast.error(
          "Não foi possível excluir o pet no momento, por favor, tente novamente mais tarde."
        );
      }
    },
    [getPets, token]
  );

  const editPet = useCallback(
    async (pet) => {
      setPetEdit(pet);
      setOpenModal(true);
    },
    [setOpenModal, setPetEdit]
  );

  useEffect(() => {
    getPets();
  }, [getPets]);

  return (
    <>
      {!loading && <PetsList deletePets={deletePet} editPet={editPet} pets={pets} />}
      <Modal open={openModal} onClose={handleCloseModal}>
        <PetEdit
          tutorId={petEdit?._id}
          pet={petEdit}
          closeModal={handleCloseModal}
          getPets={getPets}
        />
      </Modal>
    </>
  );
};

export default Pets;
