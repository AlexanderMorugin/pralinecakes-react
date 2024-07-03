import { FC } from 'react';

import CooperationImage from '../../assets/images/cooperation/img-cooperation.jpg';
import { Breadcrumbs, Cooperation, HeadingBlock, PageHeading } from '../../widgets';
import {
  META_COOPERATION_DESCRIPTION,
  META_COOPERATION_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import {
  HelmetMeta,
  MainWrapper,
  // PageWrapper
} from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_COOPERATION_TITLE, route: '' },
];

const CooperationPage: FC = () => {
  return (
    <>
      {/* <PageWrapper> */}
      <MainWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <HeadingBlock image={CooperationImage} isPage={true} />
        <PageHeading title={PAGE_COOPERATION_TITLE} isPage={true} />
        <Cooperation />
      </MainWrapper>
      {/* </PageWrapper> */}

      <HelmetMeta
        title={META_COOPERATION_TITLE}
        description={META_COOPERATION_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.COOPERATION}`}
      />
    </>
  );
};

export default CooperationPage;
