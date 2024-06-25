import { FC } from 'react';

import {
  Breadcrumbs,
  CakeBlock,
  PageHeading,
  PastryBlock,
} from '../../widgets';
import {
  META_PRODUCTS_DESCRIPTION,
  META_PRODUCTS_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: '' },
];

const ProductsPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_PRODUCTS_TITLE} />
          <PastryBlock />
          <CakeBlock />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_PRODUCTS_TITLE}
        description={META_PRODUCTS_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.PRODUCTS}`}
      />
    </>
  );
};

export default ProductsPage;
