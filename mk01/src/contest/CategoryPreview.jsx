import "./CategoryPreview.css";

const CategoryPreview = ({
  category,
  contest,
  updateRemoveContestCategories,
  clickUpdateCategory,
}) => {
  const { categoryName, description } = category;
  const { id, categories } = contest;

  const FilteredUnwantedCategory = categories.filter((cat) => cat.id !== category.id);
  const updatedCategories = [FilteredUnwantedCategory];

  return (
    <div className="categoryParagraph">
      {categoryName}
      <button
        className="categoryPreviewContainerDeleteButton"
        onClick={() => updateRemoveContestCategories(id, updatedCategories)}
      >
        -
      </button>
      <button
        className="categoryPreviewContainerPutButton"
        onClick={() => clickUpdateCategory(category)}
      >
        /
      </button>
    </div>
  );
};

export default CategoryPreview;
