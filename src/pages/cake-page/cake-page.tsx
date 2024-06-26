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
import { IProduct } from '../../widgets/product/ui/product';

interface ICakePage {
  data: IProduct[];
}

const CakePage: FC<ICakePage> = ({ data }) => {
  const { route } = useParams();
  const cake = data.filter((item) => item.route === route);
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
          <Product key={item.id} {...item} cake={true} />
        ))}
        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
};

export default CakePage;
