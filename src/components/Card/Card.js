import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const handleFavorite = () => {
    console.log('I\'m Favorite!', props.cardId);
    dispatch(toggleFavorite( props.cardId ));
  };

  const handleRemove = () => {
    console.log('Sayonara!', props.cardId);
    dispatch(removeCard( props.cardId ));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.buttons}>
        <button className={clsx(styles.favoriteButton, styles.actionButton)} onClick={handleFavorite}>
          <i className={clsx('fa', 'fa-star-o', styles.favoriteIcon, props.isFavorite && styles.active)}></i>
        </button>
        <button className={clsx(styles.removeButton, styles.actionButton)} onClick={handleRemove}>
          <i className={'fa fa-trash'}></i>
        </button>
      </div>
    </li>
  );
};

export default Card;