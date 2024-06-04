import { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../../shared/config/routes/routes';

const Products: FC = () => {
  return (
    <>
      <Link to={Routes.CAKES}>Торты</Link>
      <Link to={Routes.PASTRY}>Пирожные</Link>
    </>
  );
};

export default Products;
