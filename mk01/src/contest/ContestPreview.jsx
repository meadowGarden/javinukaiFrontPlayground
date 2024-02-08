import CategoryPreview from "./CategoryPreview";
import "./ContestPreview.css";

const ContestPreview = ({ contest, clickAddCategory, removeCategory, updateCategory}) => {
  const { contestName, description, id, startDate, endDate, categories } =
    contest;
  const categoriesToDisplay = categories.map((category) => {
    return (
      <CategoryPreview
        key={category.id}
        category={category}
        clickRemoveCategory={removeCategory}
        clickUpdateCategory={updateCategory}
      />
    );
  });

  return (
    <div className="contestContainer">
      <div>{contestName}</div>
      <p className="contestParagraph">{description}</p>
      <p className="contestParagraph">padžia - {startDate}</p>
      <p className="contestParagraph">pabaiga - {endDate}</p>
      <p className="contestParagraph">id - {id}</p>
      <div className="contestParagraph">{categoriesToDisplay}</div>
      <button
        className="contestPreviewContainerPostButton"
        onClick={() => clickAddCategory()}
      >
        +
      </button>
    </div>
  );
};

export default ContestPreview;
