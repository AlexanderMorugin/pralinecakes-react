import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_MAIN,
  META_TITLE_MAIN,
  PAGE_TITLE_MAIN,
} from '../../shared/constants/constants';
import { HelmetMeta, PageWrapper } from '../../components';

const breadcrumbs = [{ heading: 'Главная', route: '' }];

const MainPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <PageHeading title={PAGE_TITLE_MAIN} />
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_MAIN}
        description={META_DESCRIPTION_MAIN}
        route='https://pralinecakes.ru/'
      />
    </>
  );
};

export default MainPage;
