import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_MAIN } from '../../shared/constants/constants';
import { MainContentWrapper } from '../../components';

const breadcrumbs = [{ heading: 'Главная', route: '' }];

const MainPage: FC = () => {
  return (
    <MainContentWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_TITLE_MAIN} />
    </MainContentWrapper>
  );
};

export default MainPage;
