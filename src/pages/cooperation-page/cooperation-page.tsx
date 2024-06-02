import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_COOPERATION } from '../../shared/constants/constants';
import { MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_COOPERATION, route: '' },
];

const CooperationPage: FC = () => {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        <PageHeading title={PAGE_TITLE_COOPERATION} />
      </MainWrapper>
    </PageWrapper>
  );
};

export default CooperationPage;