import React, { useCallback } from "react";
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
}

const UsersList: React.FC<UsersListProps> = ({
  users,
  deleteUsers,
  editUser,
}) => {
  const { profile } = useSelector((state: RootState) => state.user);

  const renderCards = useCallback((item) => {
    if (item._id !== profile._id)
      return (
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
            <p>
              <strong>Permissões: </strong>
              {item.roles.map((itm, idx) => (
                <RolesTag key={idx}>{itm}</RolesTag>
              ))}
            </p>
          </div>
          <ButtonWrapper>
            <UserButton onClick={() => editUser(item)}>
              Editar usuário
            </UserButton>
            <UserButton isDelete onClick={() => deleteUsers(item._id)}>
              Excluir usuário
            </UserButton>
          </ButtonWrapper>
        </UserCard>
      );
  }, [deleteUsers, editUser, profile]);

  return <Container>
    {users && users.map((item) => renderCards(item))}
    </Container>;
};

export default UsersList;
