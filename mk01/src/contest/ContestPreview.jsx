import CategoryModal from "./CategoryModal";
import CategoryPreview from "./CategoryPreview";
import "./ContestPreview.css";

const ContestPreview = ({
  contest,
  updateRemoveContestCategories,
  openCategoryList,
  updateCategory,
  isModalVisible,
  handleClose,
}) => {
  const { contestName, description, id, startDate, endDate, categories } =
    contest;
  const categoriesToDisplay = categories.map((category) => {
    return (
      <CategoryPreview
        key={category.id}
        category={category}
        contestID={id}
        contest={contest}
        updateRemoveContestCategories={updateRemoveContestCategories}
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
        onClick={() => openCategoryList(contest)}
      >
        +
      </button>
      <CategoryModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        categories={categories}
      />
    </div>
  );
};

export default ContestPreview;
