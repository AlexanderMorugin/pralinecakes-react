import { FC } from 'react';

import image from '../../assets/images/petit-foires-scaled-500x500.jpg';

import { Breadcrumbs, PageHeading } from '../../widgets';
import {
  META_RECIPES_DESCRIPTION,
  META_RECIPES_TITLE,
  PAGE_RECIPES_TITLE,
} from '../../shared/constants/constants';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import Routes from '../../shared/config/routes/routes';

const breadcrumbs = [
  { heading: 'Главная', route: Routes.HOME },
  { heading: PAGE_RECIPES_TITLE, route: '' },
];

const RecipesPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          {' '}
          <PageHeading title={PAGE_RECIPES_TITLE} />
          <img src={image} alt='image' />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={META_RECIPES_TITLE}
        description={META_RECIPES_DESCRIPTION}
        route={`${Routes.BASE_URL}${Routes.RECIPES}`}
      />
    </>
  );
};

export default RecipesPage;
