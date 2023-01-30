import { Card, Button } from '@components/ui';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer id="footer" className={styles.section}>
      <Card className={styles.card}>
        <div className={styles.cardWrapper}>
          <div className={styles.leftCol}>
            <h1 className={styles.title}>Curious for More?</h1>
            <p className={styles.text}>Don’t hesitate to drop us a message. We will be happy to answer.</p>
            <Button className={styles.btn} component="a" href="https://t.me/julia_880" target="_blank">
              Let&apos;s Work Together
            </Button>
          </div>

          <div className={styles.rightCol}>
            <picture>
              <source srcSet="./assets/png/footer.png" type="image/png" />
              <img className={styles.footerImg} alt="People shaking hands" />
            </picture>
          </div>
        </div>
      </Card>

      <picture>
        <source srcSet="./assets/png/footer-elem-1.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>

      <picture>
        <source srcSet="./assets/png/footer-elem-2.png" type="image/png" />
        <img className={styles.elem2} alt="" aria-hidden="true" />
      </picture>
    </footer>
  );
};

export default Footer;
