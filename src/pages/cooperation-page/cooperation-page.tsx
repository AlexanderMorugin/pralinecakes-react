import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_COOPERATION_DESCRIPTION,
  META_COOPERATION_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_COOPERATION_TITLE, route: '' },
];

const CooperationPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_COOPERATION_TITLE} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_COOPERATION_TITLE}
        description={META_COOPERATION_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.COOPERATION}`}
      />
    </>
  );
};

export default CooperationPage;
