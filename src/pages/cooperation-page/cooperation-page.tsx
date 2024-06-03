import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_COOPERATION,
  META_TITLE_COOPERATION,
  PAGE_TITLE_COOPERATION,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_COOPERATION, route: '' },
];

const CooperationPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_COOPERATION} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_COOPERATION}
        description={META_DESCRIPTION_COOPERATION}
        route='https://pralinecakes.ru/cooperation/'
      />
    </>
  );
};

export default CooperationPage;
