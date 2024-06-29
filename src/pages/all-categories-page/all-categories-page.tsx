import { FC } from 'react';

import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import { AllCategories, Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_CATEGORIES_DESCRIPTION,
  META_CATEGORIES_TITLE,
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
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_CATEGORIES_TITLE} />
          <AllCategories />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_CATEGORIES_TITLE}
        description={META_CATEGORIES_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.CATEGORIES}`}
      />
    </>
  );
};

export default AllCategoriesPage;
