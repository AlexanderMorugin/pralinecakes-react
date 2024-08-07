import { FC } from 'react';

import useResize from '../../../shared/hooks/use-resize';
import { Scroll } from '../../../features';
import { PriorityCard } from '../../../entities';
import { priorityData } from '../../../mockData/priority-data';

import styles from './priority-block.module.scss';

const PriorityBlock: FC = () => {
  const { isScreenMd, 
    // isScreenLg
   } = useResize();

  return (
    <section className={styles.prioriryBlock}>
      <h3 className={styles.prioriryBlock__title}>Работать с нами приятно</h3>
      {isScreenMd ? (
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
        <Scroll>
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
