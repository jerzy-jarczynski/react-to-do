import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>
        Lorem Ipsum.
      </p>
    </section>
  );
};

export default Favorite;