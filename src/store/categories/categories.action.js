import { createAction } from '../../Utils/reducer/reducer.utils';
import CATEGORIES_ACTION_TYPE from './categories.type';

export const setCategoriesArray = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
