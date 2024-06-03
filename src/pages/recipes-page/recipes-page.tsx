import { FC } from 'react';

import image from '../../assets/images/petit-foires-scaled-500x500.jpg';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_DESCRIPTION_RECIPES,
  META_TITLE_RECIPES,
  PAGE_TITLE_RECIPES,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_TITLE_RECIPES, route: '' },
];

const RecipesPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          {' '}
          <PageHeading title={PAGE_TITLE_RECIPES} />
          <img src={image} alt='image' />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_TITLE_RECIPES}
        description={META_DESCRIPTION_RECIPES}
        route='https://pralinecakes.ru/recipes/'
      />
    </>
  );
};

export default RecipesPage;
