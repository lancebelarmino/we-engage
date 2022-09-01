import { Card, Button } from '@components/ui';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Card className={styles.card}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardLeftCol}>
              <h1 className={styles.title}>We specialize in building trust with your community.</h1>
              <p className={styles.text}>
                Here at We Engage, we handle all your Project&apos;s socials for you! We expertly manage them for you to build trust and rapport between you and your investors.
              </p>
              <p className={styles.text}>Whether it&apos;s community management or content creation that you need, we have you covered.</p>
              <Button className={styles.btn} component="a" href="#management">
                View Services
              </Button>
            </div>
            <picture>
              <source srcSet="./assets/png/hero.png" type="image/png" />
              <img className={styles.heroImg} alt="People shaking hands" />
            </picture>
          </div>
        </Card>
      </div>

      <picture>
        <source srcSet="./assets/png/hero-elem-1.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>

      <picture>
        <source srcSet="./assets/png/hero-elem-2.png" type="image/png" />
        <img className={styles.elem2} alt="" aria-hidden="true" />
      </picture>
    </section>
  );
};

export default Hero;
