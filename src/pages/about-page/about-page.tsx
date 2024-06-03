import { FC } from 'react';

import { AboutUs, Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_ABOUT,
  META_TITLE_ABOUT,
  PAGE_TITLE_ABOUT,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_ABOUT, route: '' },
];

const AboutPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_ABOUT} />
          <AboutUs />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_ABOUT}
        description={META_DESCRIPTION_ABOUT}
        route='https://pralinecakes.ru/about/'
      />
    </>
  );
};

export default AboutPage;
