import React from "react";

import { ButtonWrapper, Container, UserButton, UserCard } from "./styles";

interface SaleListProps {
  sales: any[] | null;
  deleteSale(id: string): void;
}

const SaleList: React.FC<SaleListProps> = ({
  deleteSale,
  sales
}) => {
  return (
    <Container isClients>
      {sales && !sales.length && (
        <h2>Não há dados para serem exibidos</h2>
      )}
      {sales &&
        sales.map((item) => (
          <UserCard key={item._id}>
            <h3>{item.pet_id.name}</h3>
            <div>
              <p>
                <strong>Descrição: </strong>
                {item.product_id[0].title}
              </p>
              <p>
                <strong>Horário: </strong>
                {new Date(item.schedule).toLocaleString('pt-BR')}
              </p>
            </div>
            <ButtonWrapper>
              {/* <UserButton onClick={() => editSale(item)}>
                Editar produto
              </UserButton> */}
              <UserButton isDelete onClick={() => deleteSale(item._id)}>
                Excluir Agendamento
              </UserButton>
            </ButtonWrapper>
          </UserCard>
        ))}
    </Container>
  );
};

export default SaleList;
