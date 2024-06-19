import { FC } from 'react';

import { Breadcrumbs, Delivery, PageHeading } from '../../widgets';
import {
  META_DELIVERY_DESCRIPTION,
  META_DELIVERY_TITLE,
  PAGE_DELIVERY_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_DELIVERY_TITLE, route: '' },
];

const DeliveryPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_DELIVERY_TITLE} />
          <Delivery />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_DELIVERY_TITLE}
        description={META_DELIVERY_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.DELIVERY}`}
      />
    </>
  );
};

export default DeliveryPage;
