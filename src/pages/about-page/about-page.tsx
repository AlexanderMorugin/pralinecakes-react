import { FC } from 'react';

import AboutImage from '../../assets/images/about-us/img-about.jpg';
import { AboutUs, Breadcrumbs, HeadingBlock, PageHeading } from '../../widgets';
import {
  META_ABOUT_DESCRIPTION,
  META_ABOUT_TITLE,
  PAGE_ABOUT_TITLE,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_ABOUT_TITLE, route: '' },
];

const AboutPage: FC = () => {
  return (
    <>
      <MainWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <HeadingBlock image={AboutImage} isPage={true} />
        <PageHeading title={PAGE_ABOUT_TITLE} isPage={true} />
        <AboutUs />
      </MainWrapper>

      <HelmetMeta
        title={META_ABOUT_TITLE}
        description={META_ABOUT_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.ABOUT}`}
      />
    </>
  );
};

export default AboutPage;
