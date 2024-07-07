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
import { HelmetMeta, MainWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_DELIVERY_TITLE, route: '' },
];

const DeliveryPage: FC = () => {
  return (
    <>
      <MainWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <HeadingBlock image={DeliveryImage} isPage={true} />
        <PageHeading title={PAGE_DELIVERY_TITLE} isPage={true} />
        <Delivery />
      </MainWrapper>

      <HelmetMeta
        title={META_DELIVERY_TITLE}
        description={META_DELIVERY_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.DELIVERY}`}
        image='https://pralinecakes.ru/assets/pastry-muraveinik-s.jpeg'
      />
    </>
  );
};

export default DeliveryPage;
