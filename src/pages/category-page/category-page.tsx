import { FC } from 'react';
import { useParams } from 'react-router';
import { pastryData } from '../../mockData/pastry-data';
import { ProductBlock } from '../../entities';
import { categoryData } from '../../mockData/category-data';

const CategoryPage: FC = () => {
  const { route } = useParams();

  const category = categoryData.filter((item) => item.route === route);
  const categoryName = category.map((item) => item.name);

  const currentArray = pastryData.filter((item) => item.type?.includes(route));

  return (
    <>
      <h1>Пирожные {categoryName}</h1>
      <ProductBlock dataPastry={currentArray} isCake={false} isPastry={true} />
    </>
  );
};

export default CategoryPage;
