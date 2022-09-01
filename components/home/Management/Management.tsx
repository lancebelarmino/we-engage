import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { Card, Button } from '@components/ui';
import { ServiceCard } from '@components/service';
import Close from '@assets/svg/services-close.svg';
import Line from '@assets/svg/services-line.svg';
import { managementServices } from '@data/services';
import { serviceCardVariant } from '@helpers/framer-variants';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Management.module.scss';

const Management = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const isCardOpen = activeService !== null;

  const activeServiceData = managementServices.filter((item) => activeService === item.id);
  const totalNumberOfSlides = 5;

  const servicesList = managementServices.map((item) => (
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
    <section id="management" className={styles.section}>
      <div className={styles.wrapper}>
        <Card className={styles.header}>
          <div className={styles.headerWrapper}>
            <Close />
            <h2 className={styles.title}>Management</h2>
            <Line />
          </div>
        </Card>

        {isCardOpen ? (
          <motion.div key="card-list" variants={serviceCardVariant} initial="hidden" animate="visible">
            <ServiceCard data={activeServiceData[0]} onClose={() => setActiveService(null)}>
              {activeService === 'voice' && (
                <div className={styles.servicesCta}>
                  <p className={styles.servicesCtaTitle}>Choose your host</p>
                  <div className={styles.servicesCtaBtnWrapper}>
                    <Button className={styles.servicesCtaBtn} color="orange">
                      V1: Marnie
                    </Button>
                    <Button className={styles.servicesCtaBtn}>V2: Doshtano</Button>
                    <Button className={styles.servicesCtaBtn}>V3: V</Button>
                  </div>
                </div>
              )}
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
        <source srcSet="./assets/png/management-elem.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>
    </section>
  );
};

export default Management;
