import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { Card, Button } from '@components/ui';
import { ServiceCard } from '@components/service';
import { brandingDesignServices } from '@data/services';
import Close from '@assets/svg/services-close.svg';
import Line from '@assets/svg/services-line.svg';
import { serviceCardVariant } from '@helpers/framer-variants';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './BrandingDesign.module.scss';

const BrandingDesign = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const isCardOpen = activeService !== null;

  const activeServiceData = brandingDesignServices.filter((item) => activeService === item.id);
  const totalNumberOfSlides = 8;

  const servicesList = brandingDesignServices.map((item) => (
    <SwiperSlide key={item.title} className={styles.swiperSlide}>
      <Card className={styles.servicesCard}>
        <div className={styles.servicesCardWrapper}>
          <picture>
            <source srcSet={item.image} type="image/png" />
            <img className={styles.servicesImg} alt="" aria-hidden="true" />
          </picture>
          <h4>{item.title}</h4>
          <Button className={styles.servicesBtn} variant="unstyled" onClick={() => setActiveService(item.id)}>
            Learn More
          </Button>
        </div>
      </Card>
    </SwiperSlide>
  ));

  return (
    <section id="branding-design" className={styles.section}>
      <div className={styles.wrapper}>
        <Card className={styles.header}>
          <div className={styles.headerWrapper}>
            <Close />
            <h2 className={styles.title}>Branding & Design</h2>
            <Line />
          </div>
        </Card>

        {isCardOpen ? (
          <motion.div key="card-list" variants={serviceCardVariant} initial="hidden" animate="visible">
            <ServiceCard data={activeServiceData[0]} onClose={() => setActiveService(null)}>
              <Button className={styles.servicesCtaBtn} component="a" href="https://t.me/julia_880" target="_blank">Ask for Sample</Button>
            </ServiceCard>
          </motion.div>
        ) : (
          <motion.div key="card-service" variants={serviceCardVariant} initial="hidden" animate="visible">
            <Swiper
              initialSlide={activeSlide}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex - totalNumberOfSlides)}
              slidesPerView={'auto'}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet ${styles.swiperBullet}`,
                bulletActiveClass: styles.swiperBulletActive,
              }}
              modules={[Pagination]}
              className={styles.swiper}>
              {servicesList}
            </Swiper>
          </motion.div>
        )}
      </div>

      <picture>
        <source srcSet="./assets/png/bd-elem.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>
    </section>
  );
};

export default BrandingDesign;
