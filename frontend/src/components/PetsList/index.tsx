import React from "react";
import history from "../../services/history";
import { IPet } from "../../types/pet";

import { ButtonWrapper, Container, UserButton, UserCard } from "./styles";

interface PetsListProps {
  pets: IPet[] | null;
  deletePets(id: string): void;
  editPet(pet: IPet): void;
}

const PetsList: React.FC<PetsListProps> = ({ pets, deletePets, editPet }) => {

  return (
    <Container isClients>
      {pets && !pets.length && <h2>Não há dados para serem exibidos</h2>}
      {pets &&
        pets.map((item) => (
          <UserCard key={item._id}>
            <h3>{item?.name}</h3>
            <div>
              <p>
                <strong>Idade: </strong>
                {item?.age}
              </p>
              <p>
                <strong>Tutor: </strong>
                {item?.tutor?.name}
              </p>
            </div>
            <ButtonWrapper>
              <UserButton onClick={() => history.push(`/schedule/${item._id}`)}>Criar agendamento</UserButton>
              <UserButton onClick={() => editPet(item)}>Editar pet</UserButton>
              <UserButton isDelete onClick={() => deletePets(item._id)}>
                Excluir pet
              </UserButton>
            </ButtonWrapper>
          </UserCard>
        ))}
    </Container>
  );
};

export default PetsList;
