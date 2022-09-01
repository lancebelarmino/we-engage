import React, { ReactNode } from 'react';
import { Card, Button } from '@components/ui';
import Close from '@assets/svg/close.svg';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  children?: ReactNode;
  data: {
    id: string;
    image: string;
    title: string;
    duties: string[];
  };
  onClose: () => void;
}

const ServiceCard = ({ children, data, onClose: closeCardHandler }: ServiceCardProps) => {
  const dutiesItems = data.duties.map((item, index) => (
    <li key={item} className={styles.dutiesItem}>
      <span className={styles.dutiesNumber}>0{index + 1}</span>
      {item}
    </li>
  ));

  return (
    <Card className={styles.servicesCard}>
      <div className={styles.servicesCardWrapper}>
        <div className={styles.servicesCardLeftCol}>
          <picture>
            <source srcSet={data.image} type="image/png" />
            <img className={styles.servicesImg} alt="" aria-hidden="true" />
          </picture>
          <h4>{data.title}</h4>
        </div>

        <div className={styles.servicesDividerCol}>
          <div className={styles.dividerLarge} />
          <div className={styles.dividerSmall} />
        </div>

        <div className={styles.servicesCardRightCol}>
          <div>
            <h4 className={styles.dutiesTitle}>Duties Included</h4>
            <ul className={styles.dutiesList}>{dutiesItems}</ul>
          </div>
          {children}
        </div>

        <Button className={styles.closeBtn} variant="unstyled" onClick={() => closeCardHandler()}>
          <Close />
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
