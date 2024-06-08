import { FC } from 'react';

import useResize from '../../../shared/hooks/useResize';
import { Scroll } from '../../../features';
import { PriorityCard } from '../../../entities';
import { priorityData } from '../../../mockData/priority-data';

import styles from './priority-block.module.scss';

const PriorityBlock: FC = () => {
  const { isScreenLg } = useResize();

  return (
    <section className={styles.prioriryBlock}>
      <h3 className={styles.prioriryBlock__title}>Работать с нами приятно</h3>
      {isScreenLg ? (
        <ul className={styles.prioriryBlock__list}>
          {priorityData.map((item, index) => (
            <li key={index}>
              <PriorityCard
                title={item.title}
                image={item.image}
                route={item.route}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Scroll withManualGrip={true}>
          {priorityData.map((item, index) => (
            <li key={index}>
              <PriorityCard
                title={item.title}
                image={item.image}
                route={item.route}
              />
            </li>
          ))}
        </Scroll>
      )}
    </section>
  );
};

export default PriorityBlock;
