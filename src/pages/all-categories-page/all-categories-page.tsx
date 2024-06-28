import { FC } from 'react';

import { MainWrapper, PageWrapper } from '../../components';
import {
  AllCategories,
  Breadcrumbs,
  PageHeading,
  PriorityBlock,
} from '../../widgets';
import {
  PAGE_CATEGORIES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import Routes from '../../shared/config/routes/routes';

const AllCategoriesPage: FC = () => {
  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_CATEGORIES_TITLE, route: '' },
  ];

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_CATEGORIES_TITLE} />
        <AllCategories />

        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
};

export default AllCategoriesPage;
