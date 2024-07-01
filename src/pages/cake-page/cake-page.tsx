import { FC } from 'react';
import { useParams } from 'react-router';

import { MainWrapper, PageWrapper } from '../../components';
import { Breadcrumbs, PriorityBlock, Product } from '../../widgets';
import Routes from '../../shared/config/routes/routes';
import {
  PAGE_CAKES_TITLE,
  PAGE_MAIN,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import { cakesData } from '../../mockData/cakes-data';

const CakePage: FC = () => {
  const { route } = useParams();
  const cake = cakesData.filter((item) => item.route === route);
  const cakeTitle = cake.map((item) => item.title);

  const breadcrumbs = [
    { heading: PAGE_MAIN, route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_CAKES_TITLE, route: Routes.CAKES },
    { heading: cakeTitle, route: '' },
  ];

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        {cake.map((item) => (
          <Product key={item.id} {...item} isCake={true} />
        ))}
        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
};

export default CakePage;
