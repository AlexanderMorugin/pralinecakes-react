import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_DELIVERY } from '../../shared/constants/constants';
import { PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_DELIVERY, route: '' },
];

const DeliveryPage: FC = () => {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_TITLE_DELIVERY} />
    </PageWrapper>
  );
};

export default DeliveryPage;
