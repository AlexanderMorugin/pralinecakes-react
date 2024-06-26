import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICategoryBlock {
  category: string[];
}

const CategoryBlock: FC<ICategoryBlock> = ({ category }) => {
  const categoryItem = category.map((item: string) => item);
  console.log(categoryItem);

  const honey = categoryItem.includes('медовое');
  const nut = categoryItem.includes('ореховое');
  const bisquit = categoryItem.includes('бисквитное');
  //  const honey = categoryItem.includes('медовое') && <h1>Медовые пирожные</h1>
  //       {categoryItem.includes('ореховое') && <h1>Ореховые пирожные</h1>}
  //       {categoryItem.includes('бисквитное') && <h1>Бисквитные пирожные</h1>}

  return (
    <ul>
      {honey && (
        <li>
          <Link to={'/'}>Медовые пирожные</Link>
        </li>
      )}
      {nut && (
        <li>
          <Link to={'/delivery'}>Ореховые пирожные</Link>
        </li>
      )}
      {bisquit && (
        <li>
          <Link to={'/contacts'}>Бисквитные пирожные</Link>
        </li>
      )}
    </ul>
  );
};

export default CategoryBlock;
