import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_ABOUT } from '../../shared/constants/constants';
import { MainContentWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_ABOUT, route: '' }
]

const AboutPage: FC = () => {
  return (
    <MainContentWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_TITLE_ABOUT} />
    </MainContentWrapper>
  );
};

export default AboutPage;
