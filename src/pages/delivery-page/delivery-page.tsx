import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_DELIVERY,
  META_TITLE_DELIVERY,
  PAGE_TITLE_DELIVERY,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_DELIVERY, route: '' },
];

const DeliveryPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_DELIVERY} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_DELIVERY}
        description={META_DESCRIPTION_DELIVERY}
        route='https://pralinecakes.ru/delivery/'
      />
    </>
  );
};

export default DeliveryPage;
