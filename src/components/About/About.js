import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return(
    <section className={styles.about}>
      <PageTitle>About</PageTitle>
      <p>
        Lorem Ipsum.
      </p>
    </section>
  );
};

export default About;