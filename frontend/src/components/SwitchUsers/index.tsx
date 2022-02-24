import React from "react";

import { Container, CustomButtom } from "./styles";

interface StwitchUsersProps {
  changeUserType(type: "user" | "admin"): void;
  userType: "user" | "admin";
}

const SwitchUsers: React.FC<StwitchUsersProps> = ({
  changeUserType,
  userType,
}) => {
  return (
    <Container>
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
