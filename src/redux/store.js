import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => column.listId === listId);

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllLists = state => state.lists;

export const getFavoriteCard = state => state.cards.filter((card) => card.isFavorite === true);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', newColumn: { ...payload } });

export const addCard = payload => ({ type: 'ADD_CARD', newCard: { ...payload } });

export const addList = payload => ({ type: 'ADD_LIST', newList: { ...payload } });

export const toggleFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.newCard, id: shortid() }] };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.newList, id: shortid() }] };
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;