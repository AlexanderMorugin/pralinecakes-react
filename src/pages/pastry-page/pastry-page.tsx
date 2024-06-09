import { FC } from 'react';
import { useParams } from 'react-router';

import { MainWrapper, PageWrapper } from '../../components';
import { Breadcrumbs, PriorityBlock, Product } from '../../widgets';
import Routes from '../../shared/config/routes/routes';
import {
  PAGE_PASTRY_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '../../shared/constants/constants';
import { IProduct } from '../../widgets/product/ui/product';

interface ICakePage {
  data: IProduct[];
}

const PastryPage: FC<ICakePage> = ({ data }) => {
  const { route } = useParams();
  const pastry = data.filter((item) => item.route === route);
  const pastryTitle = pastry.map((item) => item.title);

  const breadcrumbs = [
    { heading: 'Главная', route: Routes.HOME },
    { heading: PAGE_PRODUCTS_TITLE, route: Routes.PRODUCTS },
    { heading: PAGE_PASTRY_TITLE, route: Routes.PASTRY },
    { heading: pastryTitle, route: '' },
  ];

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs} />
      <MainWrapper>
        {pastry.map((item) => (
          <Product key={item.id} {...item} 
          pastry={true}
          />
        ))}

        <PriorityBlock />
      </MainWrapper>
    </PageWrapper>
  );
};

export default PastryPage;
