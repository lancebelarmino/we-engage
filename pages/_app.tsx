import 'swiper/css/bundle';
import '../scss/app.scss';
import { Layout } from '@components/common';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
