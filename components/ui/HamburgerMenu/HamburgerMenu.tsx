import { motion } from 'framer-motion';
import clsx from 'clsx';
import { hamburgerMenuVariant } from '@helpers/framer-variants';
import styles from './HamburgerMenu.module.scss';

interface HamburgerMenuProps {
  className?: string;
  opened?: boolean;
}

const HamburgerMenu = ({ className, opened }: HamburgerMenuProps) => {
  return (
    <motion.div id="hamburger-menu" className={clsx(className, styles.menu)}>
      <motion.span className={styles.line} animate={opened ? 'opened' : 'closed'} variants={hamburgerMenuVariant.top} />
      <motion.span className={styles.line} animate={opened ? 'opened' : 'closed'} variants={hamburgerMenuVariant.middle} />
      <motion.span className={styles.line} animate={opened ? 'opened' : 'closed'} variants={hamburgerMenuVariant.bottom} />
    </motion.div>
  );
};

export default HamburgerMenu;
