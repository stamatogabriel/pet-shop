import React from "react";

import { Button } from "./styles";

interface FloatButtonProps {
  click(): void
}

const FloatButton: React.FC<FloatButtonProps> = ({ children, click }) => {
  return <Button onClick={click}>{children}</Button>;
};

export default FloatButton;
