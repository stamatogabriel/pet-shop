import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BsX } from "react-icons/bs";
import { FiX, FiCamera, FiLogOut, FiUser, FiGrid } from "react-icons/fi";

import { Container, ModalHeader, Wrapper, Modal, Avatar } from "./styles";
import { RootState } from "../../store/modules/rootReducer";

import UserAvatar from "../../assets/avatar.png";

interface IModalLessonProps {
  close(): void;
  openMenu: boolean;
}

const Menu: React.FC<IModalLessonProps> = ({ close, openMenu }) => {
  const user = useSelector((state: RootState) => state.user.profile);

  window.onclick = function (event: any) {
    if (event.target.id === "background") close();
  };

  return (
    <>
      <Modal open={openMenu} id="background" />
      <Container open={openMenu}>
        <ModalHeader>
          <button onClick={close}>
            <BsX size={27} />
          </button>
        </ModalHeader>
        <hr />
        <Wrapper>
          <Avatar>
            <FiCamera size={50} />
            <img src={user?.avatar || UserAvatar} alt="Imagem do usuário" />
          </Avatar>
          <h3>{user?.name}</h3>
          <Link to="/profile">Editar Cadastro</Link>
        </Wrapper>
        <div>
          <Link to={'/users'}>Usuários</Link>
        </div>
      </Container>
    </>
  );
};

export default Menu;
