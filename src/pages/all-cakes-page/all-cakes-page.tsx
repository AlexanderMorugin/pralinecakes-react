import { FC } from 'react';

import { AllCakes, Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_CAKES_DESCRIPTION,
  META_CAKES_TITLE,
  PAGE_CAKES_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
  { heading: PAGE_CAKES_TITLE, route: '' },
];

const AllCakesPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_CAKES_TITLE} />
          <AllCakes />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_CAKES_TITLE}
        description={META_CAKES_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.CAKES}`}
      />
    </>
  );
};

export default AllCakesPage;
