import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_NEWS_DESCRIPTION,
  META_NEWS_TITLE,
  PAGE_MAIN,
  PAGE_NEWS_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: PAGE_MAIN, route: Routes.HOME },
  { heading: PAGE_NEWS_TITLE, route: '' },
];

const NewsPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={PAGE_NEWS_TITLE} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_NEWS_TITLE}
        description={META_NEWS_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.NEWS}`}
      />
    </>
  );
};

export default NewsPage;
