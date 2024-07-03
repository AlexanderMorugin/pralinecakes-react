import { FC } from 'react';

import DeliveryImage from '../../assets/images/delivery/img-delivery.jpg';
import {
  Breadcrumbs,
  Delivery,
  HeadingBlock,
  PageHeading,
} from '../../widgets';
import {
  META_DELIVERY_DESCRIPTION,
  META_DELIVERY_TITLE,
  PAGE_DELIVERY_TITLE,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, 
  // PageWrapper 
} from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_DELIVERY_TITLE, route: '' },
];

const DeliveryPage: FC = () => {
  return (
    <>
      {/* <PageWrapper> */}
      <MainWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <HeadingBlock image={DeliveryImage} isPage={true} />
        <PageHeading title={PAGE_DELIVERY_TITLE} isPage={true} />
        <Delivery />
      </MainWrapper>
      {/* </PageWrapper> */}

      <HelmetMeta
        title={META_DELIVERY_TITLE}
        description={META_DELIVERY_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.DELIVERY}`}
      />
    </>
  );
};

export default DeliveryPage;
