import { FC } from 'react';

import { AboutUs, Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_ABOUT_DESCRIPTION,
  META_ABOUT_TITLE,
  PAGE_ABOUT_TITLE,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_ABOUT_TITLE, route: '' },
];

const AboutPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_ABOUT_TITLE} />
          <AboutUs />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_ABOUT_TITLE}
        description={META_ABOUT_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.ABOUT}`}
      />
    </>
  );
};

export default AboutPage;
