import { FC } from 'react';

import MainImage from '../../assets/images/main/img-main.jpg';
import {
  AboutUsBlock,
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
import { HelmetMeta, MainWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const MainPage: FC = () => {
  return (
    <>
      <MainWrapper>
        <HeadingBlock image={MainImage} />
        <PageHeading title={PAGE_MAIN_TITLE} />
        <PastryBlock />
        <AboutUsBlock />
        <CakeBlock />
        <DeliveryBlock />
      </MainWrapper>

      <HelmetMeta
        title={META_MAIN_TITLE}
        description={META_MAIN_DESCRIPTION}
        route={Routes.BASE_URL}
      />
    </>
  );
};

export default MainPage;
