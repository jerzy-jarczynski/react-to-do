import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = props => {
  return(
    <section className={styles.notFound}>
      <PageTitle>404 not found</PageTitle>
    </section>
  );
};

export default NotFound;