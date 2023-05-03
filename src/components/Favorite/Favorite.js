import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCard);

  if (favoriteCards.length === 0) {
    return(
      <section className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.noCards}>No favorite cards yet...</p>
      </section>
    );
  }

  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => 
            (<Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)
          )} 
        </ul>
      </div>
    </section>
  );
};

export default Favorite;