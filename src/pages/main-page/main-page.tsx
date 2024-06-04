import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_MAIN_DESCRIPTION,
  META_MAIN_TITLE,
  PAGE_MAIN_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [{ heading: 'Главная', route: '' }];

const MainPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <PageHeading title={PAGE_MAIN_TITLE} />
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
