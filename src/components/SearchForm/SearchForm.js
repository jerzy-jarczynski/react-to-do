import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const [phrase, setPhrase] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring( phrase ));
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit} >
          <TextInput placeholder="Search..." value={phrase} onChange={e => setPhrase(e.target.value)} />
          <Button>
            <i className={'fa fa-search'}></i>
          </Button>
      </form>
  );
};

export default SearchForm;