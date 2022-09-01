import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={clsx(styles.card, className)}>{children}</div>;
};

export default Card;
