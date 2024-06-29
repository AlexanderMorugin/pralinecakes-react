import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './category-button.module.scss';

interface ICategoryButton {
  route: string;
  name: string;
  image: string;
  className?: string;
}

const CategoryButton: FC<ICategoryButton> = ({ route, name, image, className }) => {
  return (
    <Link to={route} className={`${className} ${styles.categoryButton}`}>
      <span className={styles.name}>{name}</span>
      <img
        src={image}
        alt={name}
        className={styles.categoryButton__image}
      />
    </Link>
  );
};

export default CategoryButton;
