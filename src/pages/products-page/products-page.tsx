import { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../shared/config/routes/routes';

const ProductsPage: FC = () => {
  return (
    <>
      <h1>Здесь будет страница Продукции</h1>
      <Link to={Routes.HOME}>на главную</Link>
    </>
  );
};

export default ProductsPage;
