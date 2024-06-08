import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './priority-card.module.scss';

interface IPriorityCard {
  title: string;
  image: string;
  route: string;
}

const PriorityCard: FC<IPriorityCard> = ({ title, image, route }) => {
  return (
    <Link to={route} className={styles.priorityCard}>
      <img src={image} alt={title} className={styles.priorityCard__image} />
      <p className={styles.priorityCard__title}>{title}</p>
    </Link>
  );
};

export default PriorityCard;
