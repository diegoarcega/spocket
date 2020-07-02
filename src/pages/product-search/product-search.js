import React, { memo, Fragment, useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import { Dropshippers } from 'services';
import debounce from 'lodash.debounce';
import { PageTitle } from 'components/page';
import { Space } from 'components/space';
import { Group } from 'components/group';
import { Input } from 'components/input';
import { Button } from 'components/button';
import { Loading } from 'components/loading';
import { Row, Col } from 'components/grid';
import { Card } from 'components/product-card';
import { ProductsContainer } from './product-search.styles';

const ProductSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(0);

  const setKeywordDebounced = debounce(setKeyword, 800);
  const handleSearchChange = ({ target }) => setKeywordDebounced(target.value);

  const { isLoading, isError, error, resolvedData, latestData, isFetching } = usePaginatedQuery(
    [Dropshippers.ENDPOINT.LISTINGS, keyword],
    (key, keyword) => Dropshippers.listings(keyword),
  );

  return (
    <Fragment>
      <PageTitle>Product Search</PageTitle>
      <Space vertical="20" />
      <Group direction="row">
        <Input width="100%" autoFocus onChange={handleSearchChange} isLoading={isFetching} />
        <Button variant="addon-right">Search</Button>
      </Group>
      <Space vertical="30" />
      <ProductsContainer>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          // `resolvedData` will either resolve to the latest page's data
          // or if fetching a new page, the last successful page's data
          <Row>
            {resolvedData.data.map(project => (
              <Col align="center" justify="center" key={project.id}>
                <Card>{project.title}</Card>
              </Col>
            ))}
          </Row>
        )}
      </ProductsContainer>
      <span>Current Page: {page + 1}</span>
      <Group direction="row">
        <button onClick={() => setPage(old => Math.max(old - 1, 0))} disabled={page === 0}>
          Previous Page
        </button>{' '}
        <button
          onClick={() =>
            // Here, we use `latestData` so the Next Page
            // button isn't relying on potentially old data
            setPage(old => (!latestData || !latestData.hasMore ? old : old + 1))
          }
          disabled={!latestData || !latestData.hasMore}
        >
          Next Page
        </button>
      </Group>
      {
        // Since the last page's data potentially sticks around between page requests,
        // we can use `isFetching` to show a background loading
        // indicator since our `status === 'loading'` state won't be triggered
        isFetching ? <span> Loading...</span> : null
      }{' '}
    </Fragment>
  );
};

export default memo(ProductSearch);
