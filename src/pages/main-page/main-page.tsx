import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_MAIN } from '../../shared/constants/constants';
import { PageWrapper } from '../../components';

const breadcrumbs = [{ heading: 'Главная', route: '' }];

const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_TITLE_MAIN} />
    </PageWrapper>
  );
};

export default MainPage;
