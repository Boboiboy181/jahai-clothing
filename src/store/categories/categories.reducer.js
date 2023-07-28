import CATEGORIES_ACTION_TYPE from './categories.type';

const INITIAL_STATE = {
  categoriesMap: {}
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
