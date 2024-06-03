import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_PRODUCTS,
  META_TITLE_PRODUCTS,
  PAGE_TITLE_PRODUCTS,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_PRODUCTS, route: '' },
];

const ProductsPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_PRODUCTS} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_PRODUCTS}
        description={META_DESCRIPTION_PRODUCTS}
        route='https://pralinecakes.ru/products/'
      />
    </>
  );
};

export default ProductsPage;
