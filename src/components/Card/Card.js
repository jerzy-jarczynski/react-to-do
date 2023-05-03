import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleFavorite( props.cardId ));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button className={styles.favoriteButton} onClick={clickHandler}>
        <i className={clsx('fa', 'fa-star-o', styles.favoriteIcon, props.isFavorite && styles.active)}></i>
      </button>
    </li>
  );
};

export default Card;