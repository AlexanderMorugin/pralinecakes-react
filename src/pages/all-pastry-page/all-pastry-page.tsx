import { FC } from 'react';

import { AllPastry, Breadcrumbs, PageHeading } from '../../widgets';
import {
  PAGE_PRODUCTS_TITLE,
  PAGE_PASTRY_TITLE,
  META_PASTRY_TITLE,
  META_PASTRY_DESCRIPTION,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
  { heading: PAGE_PASTRY_TITLE, route: '' },
];

const AllPastryPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_PASTRY_TITLE} />
          <AllPastry />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_PASTRY_TITLE}
        description={META_PASTRY_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.PASTRY}`}
      />
    </>
  );
};

export default AllPastryPage;
