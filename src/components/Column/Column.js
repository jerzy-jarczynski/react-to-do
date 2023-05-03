import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {

  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <i className={styles.icon + ' fa fa-' + props.icon}></i>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} cardId={card.id} title={card.title} isFavorite={card.isFavorite} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;