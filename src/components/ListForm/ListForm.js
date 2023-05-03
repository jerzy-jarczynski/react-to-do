import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDecription] = useState('');

  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDecription('');
  };

	return (

    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>Title:</label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label>Description:</label>
      <TextInput value={description} onChange={e => setDecription(e.target.value)} />
      <Button>Add list</Button>
    </form>

	);

};

export default ListForm;