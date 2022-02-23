import React from "react";

import { Container, CustomButtom } from "./styles";

interface StwitchUsersProps {
  changeUserType(type: "user" | "admin" | "client"): void;
  userType: "user" | "admin" | "client";
}

const SwitchUsers: React.FC<StwitchUsersProps> = ({
  changeUserType,
  userType,
}) => {
  return (
    <Container>
      <CustomButtom
        selected={userType === "client"}
        onClick={() => changeUserType("client")}
      >
        Clientes
      </CustomButtom>
      <CustomButtom
        selected={userType === "admin"}
        onClick={() => changeUserType("admin")}
      >
        Administradores
      </CustomButtom>
      <CustomButtom
        selected={userType === "user"}
        onClick={() => changeUserType("user")}
      >
        Usuários
      </CustomButtom>
    </Container>
  );
};

export default SwitchUsers;
