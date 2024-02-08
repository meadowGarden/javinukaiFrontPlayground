import "./CategoryPreview.css";

const CategoryPreview = ({
  category,
  clickRemoveCategory,
  clickUpdateCategory,
}) => {
  const { categoryName, description } = category;

  // console.log(category);

  return (
    <div className="categoryParagraph">
      {categoryName}
      <button
        className="categoryPreviewContainerDeleteButton"
        onClick={() => clickRemoveCategory(category)}
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
