import React from "react";
import { IProduct } from "../../types/product";

import { ButtonWrapper, Container, UserButton, UserCard } from "./styles";

interface ProductsListProps {
  products: IProduct[] | null;
  deleteProduct(id: string): void;
  editProduct(user: IProduct): void;
}

const ProductsList: React.FC<ProductsListProps> = ({
  products,
  deleteProduct,
  editProduct,
}) => {
  return (
    <Container isClients>
      {products && !products.length && (
        <h2>Não há dados para serem exibidos</h2>
      )}
      {products &&
        products.map((item) => (
          <UserCard key={item._id}>
            <h3>{item.title}</h3>
            <div>
              <p>
                <strong>Descrição: </strong>
                {item.description}
              </p>
              <p>
                <strong>Preço: </strong>
                {item.price}
              </p>
              <p>
                <strong>Precisa agendar? </strong>
                {item.need_schedule ? 'Sim' : 'Não'}
              </p>
            </div>
            <ButtonWrapper>
              <UserButton onClick={() => editProduct(item)}>
                Editar produto
              </UserButton>
              <UserButton isDelete onClick={() => deleteProduct(item._id)}>
                Excluir produto
              </UserButton>
            </ButtonWrapper>
          </UserCard>
        ))}
    </Container>
  );
};

export default ProductsList;
