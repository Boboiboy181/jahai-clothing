import { AnyAction } from 'redux';
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from './categories.action';
import { Category } from './categories.type';

export type CategoriesState = {
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: null | Error;
};

const INITIAL_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction,
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categoriesArray: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
