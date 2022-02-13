import React from "react";

import { Container, Content } from "./styles";

interface ModalProps {
  onClose(): void
  open: boolean
}

const Modal: React.FC<ModalProps> = ({ children, onClose, open }) => {

  window.onclick = function (event: any) {
    if (event.target.id === "background") onClose();
  };

  return (
    <Container open={open} id="background">
      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;
