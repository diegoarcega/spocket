import React, { memo, Fragment, useState, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Dropshippers } from 'services';
import debounce from 'lodash.debounce';
import VisibilitySensor from 'react-visibility-sensor';
import { PageTitle } from 'components/page';
import { Space } from 'components/space';
import { Group } from 'components/group';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { Loading, Spinner } from 'components/loading';
import { Row, Col } from 'components/grid';
import { Card } from 'components/product-card';
import { ProductsContainer } from './product-search.styles';

const ProductSearch = () => {
  const [activePage, setActivePage] = useState({ page: 1, keyword: '' });
  const inputRef = useRef(null);

  const setKeywordDebounced = debounce(value => setActivePage({ page: 1, keyword: value }), 500);
  const handleSearchChange = ({ target }) => setKeywordDebounced(target.value);

  function handleSearchClick() {
    activePage({ page: 1, keyword: inputRef.current.value });
  }

  const { isLoading, isError, error, isFetching, data, fetchMore } = useInfiniteQuery(
    [Dropshippers.ENDPOINT.LISTINGS, activePage.keyword, activePage.page],
    (key, keyword, initialPage, currentPage = 1) =>
      Dropshippers.listings(keyword, currentPage).then(response => ({
        data: response.data,
        nextPage: currentPage + 1,
      })),
    {
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      getFetchMore: lastGroup => lastGroup.nextPage,
    },
  );

  function handleFetchMore(isVisible) {
    if (isVisible && data && hasMorePages(data)) {
      return fetchMore();
    }
  }

  return (
    <Fragment>
      <PageTitle>Product Search</PageTitle>
      <Space vertical="20" />
      <Group direction="row">
        <Input
          width="100%"
          autoFocus
          onChange={handleSearchChange}
          isLoading={!isLoading && isFetching}
          innerRef={inputRef}
        />
        <Button variant="addon-right" onClick={handleSearchClick}>
          Search
        </Button>
      </Group>
      <Space vertical="30" />
      <ProductsContainer>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <Row>
            {data.map((page, i) => (
              <Fragment key={i}>
                {page.data.map(product => (
                  <Col xs={8} sm={2} md={2} key={product.id}>
                    <Card
                      title={product.title}
                      price={product.formatted_price}
                      msrp={product.formatted_msrp}
                      countryOrigin={product.country_origin}
                      supplierShopName={product.supplier_shop_name}
                      imgSrc={product.image_cover_url}
                    />
                  </Col>
                ))}
              </Fragment>
            ))}
          </Row>
        )}
      </ProductsContainer>
      <VisibilitySensor onChange={handleFetchMore} offset={{ top: 100 }}>
        <Group direction="column" alignItems="center">
          {isFetching && <Spinner size={20} />}
          <Space vertical="50" />
        </Group>
      </VisibilitySensor>
    </Fragment>
  );
};

function hasMorePages(data) {
  const lastPage = data[data.length - 1];
  return lastPage.data.length > 0;
}

export default memo(ProductSearch);
