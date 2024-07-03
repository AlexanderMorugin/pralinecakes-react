import { FC } from 'react';

import MainImage from '../../assets/images/main/img-main.jpg';
import {
  CakeBlock,
  DeliveryBlock,
  HeadingBlock,
  PageHeading,
  PastryBlock,
} from '../../widgets';
import {
  META_MAIN_DESCRIPTION,
  META_MAIN_TITLE,
  PAGE_MAIN_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, 
  // PageWrapper

 } from '../../components';
import Routes from '../../shared/config/routes/routes';

const MainPage: FC = () => {
  return (
    <>
      {/* <PageWrapper> */}
        <MainWrapper>
          <HeadingBlock image={MainImage} />
          <PageHeading title={PAGE_MAIN_TITLE} />
          <PastryBlock />
          <CakeBlock />
          <DeliveryBlock />
        </MainWrapper>
      {/* </PageWrapper> */}

      <HelmetMeta
        title={META_MAIN_TITLE}
        description={META_MAIN_DESCRIPTION}
        route={Routes.BASE_URL}
      />
    </>
  );
};

export default MainPage;
