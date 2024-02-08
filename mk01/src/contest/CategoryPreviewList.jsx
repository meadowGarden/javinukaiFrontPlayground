import "./CategoryPreviewList.css";

const CategoryPreviewList = ({ category, clickRemoveCategory }) => {
  const { categoryName, description, totalSubmissions } = category;

  return (
    <div className="categoryParagraph">
      <strong>{categoryName}</strong>, {description} ({totalSubmissions})
      <button
        className="categoryPreviewListContainerDeleteButton"
        onClick={() => clickRemoveCategory(category)}
      >
        -
      </button>
    </div>
  );
};

export default CategoryPreviewList;
