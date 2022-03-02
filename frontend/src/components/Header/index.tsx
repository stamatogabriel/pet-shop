import { useState, useCallback } from "react";

import Menu from "../Menu";

import Logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Container, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules/rootReducer";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { signed } = useSelector((state: RootState) => state.auth);

  const close = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      {signed && (
        <Container>
          <Wrapper>
            <button>
              <AiOutlineMenu size={27} onClick={() => setOpenMenu(true)} />
            </button>
            <img src={Logo} alt="Logo" />
          </Wrapper>
          <Menu close={close} openMenu={openMenu} />
        </Container>
      )}
    </>
  );
};

export default Header;
