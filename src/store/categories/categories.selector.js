import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categoriesArray,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray) => {
    return categoriesArray.reduce((acc, curr) => {
      const { title, items } = curr;
      return { ...acc, [title.toLowerCase()]: items };
    }, {});
  },
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading,
);
