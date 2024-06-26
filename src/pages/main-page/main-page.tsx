import { FC } from 'react';

import { Breadcrumbs, PageHeading, PriorityBlock } from '../../widgets';
import {
  META_MAIN_DESCRIPTION,
  META_MAIN_TITLE,
  PAGE_MAIN,
  PAGE_MAIN_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [{ heading: PAGE_MAIN, route: '' }];

const MainPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_MAIN_TITLE} />
          <PriorityBlock />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_MAIN_TITLE}
        description={META_MAIN_DESCRIPTION}
        route={Routes.BASE_URL}
      />
    </>
  );
};

export default MainPage;
