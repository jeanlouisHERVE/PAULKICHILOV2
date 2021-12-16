import GRAVURES_DATA from './gravures.data';

const INITIAL_STATE = {
  gravuresCollections: GRAVURES_DATA,
};

const gravuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gravuresReducer;
