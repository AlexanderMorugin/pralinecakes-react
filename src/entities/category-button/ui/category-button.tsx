import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CategoryProps } from '../../../shared/types/types';

import styles from './category-button.module.scss';

interface ICategoryButton extends CategoryProps {
  className?: string;
}

const CategoryButton: FC<ICategoryButton> = ({
  route,
  name,
  image,
  className,
}) => {
  return (
    <Link to={route} className={`${className} ${styles.categoryButton}`}>
      <span className={styles.name}>{name}</span>
      <img src={image} alt={name} className={styles.categoryButton__image} />
    </Link>
  );
};

export default CategoryButton;
