import { Card, Button } from '@components/ui';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.leftCol}>
          <picture>
            <source srcSet="./assets/png/about.png" type="image/png" />
            <img className={styles.aboutImg} alt="People shaking hands" />
          </picture>
        </div>

        <div className={styles.rightCol}>
          <Card className={styles.card}>
            <h1 className={styles.title}>Why Work with Us?</h1>
            <p className={styles.text}>
              In the past year, we have managed, collaborated, and produced Content for dozens of projects here in the crypto space. We specialize in community management for telegram/discord groups -
              which saves you a lot of time in community building.
            </p>
            <p className={styles.text}>
              We aim to ensure that your community chat and socials are always active, informative, and positive to build a trusting relationship between you and your investors.
            </p>
            <Button className={styles.btn} component="a" href="#management" variant="unstyled">
              Here&apos;s what else we can do.
            </Button>
          </Card>
        </div>
      </div>

      <picture>
        <source srcSet="./assets/png/about-elem-1.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>

      <picture>
        <source srcSet="./assets/png/about-elem-2.png" type="image/png" />
        <img className={styles.elem2} alt="" aria-hidden="true" />
      </picture>
    </section>
  );
};

export default About;
