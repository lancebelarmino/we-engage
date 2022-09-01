import React, { ReactNode } from 'react';
import clsx from 'clsx';
import BtnArrow from '@assets/svg/btn-arrow.svg';
import styles from './Button.module.scss';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
  component?: React.ElementType;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'default' | 'unstyled';
  color?: 'blue' | 'orange';
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, className, component: Component = 'button', variant = 'default', color = 'blue', ...others } = props;

  if (variant === 'unstyled') {
    return (
      <Component className={clsx(styles.unstyled, className)} {...others}>
        {children}
      </Component>
    );
  }

  return (
    <Component className={clsx(styles.default, className, styles[color])} {...others}>
      {children}
      <picture>
        <source srcSet={`./assets/png/btn-arrow-${color}.png`} type="image/png" />
        <img className={styles.btnArrow} alt="" aria-hidden="true" />
      </picture>
    </Component>
  );
};

export default Button;
