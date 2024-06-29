import { FC } from 'react';
import { useParams } from 'react-router';

import { pastryData } from '../../mockData/pastry-data';
import { categoryData } from '../../mockData/category-data';
import { HelmetMeta, MainWrapper, PageWrapper } from '../../components';
import { Breadcrumbs, Category, PageHeading } from '../../widgets';
import {
  PAGE_CATEGORIES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import Routes from '../../shared/config/routes/routes';

const CategoryPage: FC = () => {
  const { route } = useParams();

  const category = categoryData.filter((item) => item.route === route);
  const categoryName = category.map((item) => item.name);
  const currentArray = pastryData.filter((item) => item.type?.includes(route));

  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_CATEGORIES_TITLE, route: Routes.CATEGORIES },
    { heading: categoryName, route: '' },
  ];

  return (
    <>
      <PageWrapper>
        <Breadcrumbs links={breadcrumbs} />
        <MainWrapper>
          <PageHeading title={`Пирожные ${categoryName}`} />
          <Category data={currentArray} isCake={false} isPastry={true} />
        </MainWrapper>
      </PageWrapper>

      <HelmetMeta
        title={`Пирожные ${categoryName}`}
        description={`Пирожные ${categoryName} в кондитерской Пралине`}
        route={`${Routes.BASE_URL}${Routes.CATEGORIES}${route}`}
      />
    </>
  );
};

export default CategoryPage;
