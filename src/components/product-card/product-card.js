import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/text';
import { Group } from 'components/group';
import { Space } from 'components/space';
import { Container, ImageContainer, Image, Description } from './product-card.styles';

const flags = {
  'United States': '&#x1F1FA;&#x1F1F8;',
  China: '&#x1F1E8;&#x1F1F3;',
};

const ProductCard = ({ imgSrc, title, supplierShopName, countryOrigin, msrp, price }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
      <Description>
        <Text size="small">{title}</Text>
        <Space vertical="9" />
        <Group direction="row" alignItems="center">
          <Text size="small">By</Text>
          <Space horizontal="3" />
          <Text size="small" color="primary" weight="bold">
            {supplierShopName}
          </Text>
          <Space horizontal="5" />
          <Text size="small" dangerouslySetInnerHTML={{ __html: flags[countryOrigin] }} />
        </Group>
        <Space vertical="13" />
        <Group direction="row" justifyContent="space-between">
          <Group>
            <Text size="xsmall">Price (usd)</Text>
            <Space vertical="3" />
            <Text weight="bold">{price.replace('USD', '')}</Text>
          </Group>
          <Group alignItems="flex-end">
            <Text size="xsmall" color="muted">
              Retail Price (usd)
            </Text>
            <Space vertical="3" />
            <Text weight="bold" color="muted">
              {msrp.replace('USD', '')}
            </Text>
          </Group>
        </Group>
      </Description>
    </Container>
  );
};

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  supplierShopName: PropTypes.string.isRequired,
  countryOrigin: PropTypes.string.isRequired,
  msrp: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default memo(ProductCard);
