import React, { memo } from 'react';
import { Container, ImageContainer, Image } from './product-card.styles';

const ProductCard = ({ imgSrc }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
    </Container>
  );
};

export default memo(ProductCard);
