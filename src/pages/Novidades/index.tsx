import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
} from './styles';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  formattedPrice: string;
  thumbnail_url: string;
}

const Novidades: React.FC = () => {

  return (
    <Container>
      <Header>
        <HeaderTitle>Novidades</HeaderTitle>
      </Header>
    </Container>
  );
};

export default Novidades;
