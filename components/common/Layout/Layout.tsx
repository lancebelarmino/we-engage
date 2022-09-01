import React, { ReactNode } from 'react';
import { Navbar, Footer } from '@components/common';
import styles from './Layout.module.scss';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
