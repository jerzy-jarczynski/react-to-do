import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsRedux';

import { getListById } from '../../redux/listsRedux';

import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {

  const { listId } = useParams();

  const listData = useSelector(
    state => getListById(state, listId)
  );

  const columns = useSelector(
    state => getColumnsByList(state, listId)
  );

  if (!listData) return <Navigate to="/" />;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          { listData.title }
        </h2>
      </header>
      <p className={styles.description}>
        { listData.description }
      </p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id} {...column} />
        )}
      </section>
      <ColumnForm listId={ listData.id } />
    </div>
  );

};

export default List;