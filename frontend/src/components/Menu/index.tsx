// 01473230
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FiX,
  FiCamera,
  FiLogOut,
  FiUser,
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiDollarSign,
} from "react-icons/fi";
import { MdPets } from "react-icons/md";

import {
  Container,
  ModalHeader,
  Wrapper,
  Modal,
  Avatar,
  LinkWrapper,
  MenuItem,
  Logout,
} from "./styles";
import { RootState } from "../../store/modules/rootReducer";

import { useCallback } from "react";
import history from "../../services/history";
import { signOut } from "../../store/modules/auth/actions";

interface IModalLessonProps {
  close(): void;
  openMenu: boolean;
}

const Menu: React.FC<IModalLessonProps> = ({ close, openMenu }) => {
  const user = useSelector((state: RootState) => state.user.profile);
  const dispatch = useDispatch();

  const location = useLocation();

  window.onclick = function (event: any) {
    if (event.target.id === "background") close();
  };

  const handleMenuItem = useCallback(
    (path: string) => {
      history.push(path);
      close();
    },
    [close]
  );

  return (
    <>
      <Modal open={openMenu} id="background" />
      <Container open={openMenu}>
        <ModalHeader>
          <button onClick={close}>
            <FiX size={27} />
          </button>
        </ModalHeader>
        <hr />
        <Wrapper>
          <Avatar>
            <FiCamera size={50} />
            <img
              src={
                user?.avatar ||
                `https://ui-avatars.com/api/?bold=true?rounded=true&background=ff6600&color=fff&name=${user?.name}`
              }
              alt="Imagem do usuário"
            />
          </Avatar>
          <h3>{user?.name}</h3>
          <Link to="/profile">Editar Cadastro</Link>
        </Wrapper>
        <LinkWrapper>
          <MenuItem
            onClick={() => handleMenuItem("/home")}
            checked={location.pathname === "/home"}
          >
            <FiGrid size={20} /> Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItem("/users")}
            checked={location.pathname === "/users"}
          >
            <FiUser size={20} /> Usuários
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItem("/clients")}
            checked={location.pathname === "/clients"}
          >
            <FiUsers size={20} />
            Clientes
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItem("/pets")}
            checked={location.pathname === "/pets"}
          >
            <MdPets size={20} />
            Pets
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItem("/products")}
            checked={location.pathname === "/products"}
          >
            <FiShoppingBag size={20} />
            Produtos
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItem("/sales")}
            checked={location.pathname === "/sales"}
          >
            <FiDollarSign size={20} />
            Vendas
          </MenuItem>
        </LinkWrapper>
        <Logout onClick={() => dispatch(signOut())}>
          <FiLogOut /> Sair
        </Logout>
      </Container>
    </>
  );
};

export default Menu;
