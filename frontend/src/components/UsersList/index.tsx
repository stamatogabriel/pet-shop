import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";
import { IUser } from "../../types/user";

import {
  ButtonWrapper,
  Container,
  RolesTag,
  UserButton,
  UserCard,
} from "./styles";

interface UsersListProps {
  users: IUser[] | null;
  deleteUsers(id: string): void;
  editUser(user: IUser): void;
  editPet?(user: IUser): void
  isClients?: boolean;
}

const UsersList: React.FC<UsersListProps> = ({
  users,
  deleteUsers,
  editUser,
  editPet,
  isClients,
}) => {
  const { profile } = useSelector((state: RootState) => state.user);

  return (
    <Container isClients={isClients}>
      {users && !users.length && <h2>Não há dados para serem exibidos</h2>}
      {users &&
        users.map((item) => (
          <UserCard key={item._id}>
            <h3>{item.name}</h3>
            <div>
              <p>
                <strong>E-mail: </strong>
                {item.email}
              </p>
              <p>
                <strong>Telefone: </strong>
                {item.phone}
              </p>
              {!isClients && (
                <p>
                  <strong>Permissões: </strong>
                  {Array.isArray(item.roles) &&
                    item.roles.map((itm: string, idx: number) => (
                      <RolesTag key={idx}>{itm}</RolesTag>
                    ))}
                </p>
              )}
            </div>
            {profile._id !== item._id && (
              <ButtonWrapper>
                {isClients && <UserButton onClick={() => editPet(item)}>Cadastrar Pet</UserButton>}
                <UserButton onClick={() => editUser(item)}>
                  Editar usuário
                </UserButton>
                <UserButton isDelete onClick={() => deleteUsers(item._id)}>
                  Excluir usuário
                </UserButton>
              </ButtonWrapper>
            )}
            {profile._id === item._id && (
              <ButtonWrapper>
                <UserButton>Ir para meus dados</UserButton>
              </ButtonWrapper>
            )}
          </UserCard>
        ))}
    </Container>
  );
};

export default UsersList;
