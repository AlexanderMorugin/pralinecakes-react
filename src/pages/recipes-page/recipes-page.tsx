import { FC } from 'react';

import { Breadcrumbs, PageHeading } from '../../widgets';
import { PAGE_TITLE_RECIPES } from '../../shared/constants/constants';
import { MainContentWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_RECIPES, route: '' },
];

const RecipesPage: FC = () => {
  return (
    <MainContentWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <PageHeading title={PAGE_TITLE_RECIPES} />
    </MainContentWrapper>
  );
};

export default RecipesPage;
