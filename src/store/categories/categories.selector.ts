import { createSelector } from 'reselect';
import { CategoryMap } from './categories.type';
import { CategoriesState } from './categories.reducer';
import { RootState } from '../store';

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesArray,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray): CategoryMap => {
    return categoriesArray.reduce((acc, curr) => {
      const { title, items } = curr;
      return { ...acc, [title.toLowerCase()]: items };
    }, {} as CategoryMap);
  },
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading,
);
