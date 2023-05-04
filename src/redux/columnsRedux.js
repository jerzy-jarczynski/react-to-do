import shortid from 'shortid';

// selectors
export const getColumnsByList = ({ columns }, listId) => columns
  .filter(column => column.listId === listId);

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const addColumn = payload => ({ type: ADD_COLUMN, newColumn: { ...payload } });

// subreducer
const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.newColumn, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;