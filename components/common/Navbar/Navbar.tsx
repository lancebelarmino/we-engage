import { useState } from 'react';
import clsx from 'clsx';
import useMediaQuery from '@hooks/useMediaQuery';
import { HamburgerMenu, Button } from '@components/ui';
import Logo from '@assets/svg/logo.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { navVariant } from '@helpers/framer-variants';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const isTablet = useMediaQuery('(max-width: 1023px)', false);

  const nav = (
    <motion.nav className={clsx({ [styles.mobileNav]: isTablet })} variants={navVariant} initial={isTablet ? 'hidden' : false} animate="visible" {...(isTablet && { exit: 'exit' })}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#about" onClick={() => setIsBurgerOpen(false)}>
            <span className={styles.test}>About</span>
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#management" onClick={() => setIsBurgerOpen(false)}>
            Services
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#footer" onClick={() => setIsBurgerOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>
    </motion.nav>
  );

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <Logo />

        <AnimatePresence>{isTablet ? isBurgerOpen && nav : nav}</AnimatePresence>

        {isTablet && (
          <Button type="button" variant="unstyled" onClick={() => setIsBurgerOpen((prevData) => !prevData)}>
            <HamburgerMenu opened={isBurgerOpen} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
