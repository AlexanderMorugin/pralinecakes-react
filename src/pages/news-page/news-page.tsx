import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_NEWS,
  META_TITLE_NEWS,
  PAGE_TITLE_NEWS,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_NEWS, route: '' },
];

const NewsPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_TITLE_NEWS} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_NEWS}
        description={META_DESCRIPTION_NEWS}
        route='https://pralinecakes.ru/news/'
      />
    </>
  );
};

export default NewsPage;
