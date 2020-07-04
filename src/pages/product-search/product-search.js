import React, { memo, Fragment, useState, useEffect, useRef } from 'react';
import { usePaginatedQuery } from 'react-query';
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

const ITEMS_PER_PAGE = 24;

const ProductSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const setKeywordDebounced = debounce(setKeyword, 500);
  const handleSearchChange = ({ target }) => setKeywordDebounced(target.value);

  function fetchMore(isVisible) {
    if (isVisible) {
      setPage(_page => _page + 1);
    }
  }

  function handleSearchClick() {
    setKeyword(inputRef.current.value || '');
  }

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  const { isLoading, isError, error, isFetching, resolvedData } = usePaginatedQuery(
    [Dropshippers.ENDPOINT.LISTINGS, keyword, page],
    (key, keyword, page) => Dropshippers.listings(keyword, page),
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (!resolvedData) return;
    if (page === 1) {
      return setResults(resolvedData.data);
    }
    setResults(currentResults => [...currentResults, ...resolvedData.data]);
  }, [resolvedData, page]);

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
            {results.map(product => (
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
          </Row>
        )}
      </ProductsContainer>
      {!isLoading && (
        <VisibilitySensor onChange={fetchMore} offset={{ top: 0 }}>
          <Fragment>
            <Group direction="row" justifyContent="center">
              {shouldShowSpinner(resolvedData, ITEMS_PER_PAGE) && <Spinner size={20} />}
            </Group>
            <Space vertical="50" />
          </Fragment>
        </VisibilitySensor>
      )}
    </Fragment>
  );
};

function shouldShowSpinner(newResults, itemsPerPage) {
  return itemsPerPage === newResults?.data?.length;
}

export default memo(ProductSearch);
