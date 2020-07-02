import React, { memo, Fragment } from 'react';
import { PageTitle } from 'components/page';
import { Space } from 'components/space';
import { Group } from 'components/group';
import { Input } from 'components/input';
import { Button } from 'components/button';

const ProductSearch = () => {
  return (
    <Fragment>
      <PageTitle>Product Search</PageTitle>
      <Space vertical="20" />
      <Group direction="row">
        <Input />
        <Button>Search</Button>
      </Group>
    </Fragment>
  );
};

export default memo(ProductSearch);
