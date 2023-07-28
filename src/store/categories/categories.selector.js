export const selectCategoriesMap = (state) => {
  return state.categories.categoriesArray.reduce((acc, curr) => {
    const { title, items } = curr;
    return { ...acc, [title.toLowerCase()]: items };
  }, {});
};
