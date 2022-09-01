import { Card, Button } from '@components/ui';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <Card className={styles.card}>
        <div>
          <h1 className={styles.header}>See What We&apos;ve Been Up To</h1>
        </div>

        <Card className={styles.project}>
          <Button className={styles.projectItem} component="a" variant="unstyled" href="#">
            Project
          </Button>
          <Button className={styles.projectItem} component="a" variant="unstyled" href="#">
            Project
          </Button>
          <Button className={styles.projectItem} component="a" variant="unstyled" href="#">
            Project
          </Button>
          <Button className={styles.projectItem} component="a" variant="unstyled" href="#">
            Project
          </Button>
        </Card>
      </Card>

      <picture>
        <source srcSet="./assets/png/project-elem.png" type="image/png" />
        <img className={styles.elem1} alt="" aria-hidden="true" />
      </picture>
    </section>
  );
};

export default Projects;
