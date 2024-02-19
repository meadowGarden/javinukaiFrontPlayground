import { useEffect, useState } from "react";
import axios from "axios";
import ContestPreview from "./ContestPreview";
import "./ContestCreation.css";
import NewContestForm from "./NewContestForm";
import NewCategoryForm from "./NewCategoryForm";
import CategoryPreviewList from "./CategoryPreviewList";

const ContestCreation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisbible] = useState();
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [constestArr, setContestArr] = useState([]);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 20;

    axios
      .get(
        `http://localhost:8080/api/v1/categories?pageNumber=${pageNumber}&pageSize=${pageSize}`
      )
      .then((response) => {
        setCategoriesArr(response.data.content);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const pageNumber = 1;
    const pageSize = 20;

    axios
      .get(
        `http://localhost:8080/api/v1/contests?pageNumber=${pageNumber}&pageSize=${pageSize}`
      )
      .then((response) => {
        setContestArr(response.data.content);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  const addCategoryFromListAC = (category) => {
    console.log(
      "cetegory to add" + category.categoryName + " " + category.description
    );
  };

  const addCategoryFromListForm = () => {
    console.log("miau");
  };

  const openCategoryList = (contest) => {
    console.log(contest);
    setIsModalVisbible(true);
  };

  const deleteCategoryFromList = (category) => {
    axios
      .delete(`http://localhost:8080/api/v1/categories/${category?.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const removeCategoryFromContest = (contestID, category) => {
    console.log(contestID);
    console.log(category.id);

    axios
      .patch(`http://localhost:8080/api/v1/contests/remove/${contestID}`, {
        data: [category.id],
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const updateRemoveContestCategories = (contestID, categories) => {
    axios
      .patch(`http://localhost:8080/api/v1/contests/${contestID}`, categories)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const updateCategory = (category) => {
    console.log(category.categoryName);
    axios
      .put(`http://localhost:8080/api/v1/categories/${category?.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }

  const handleClose = () => {
    setIsModalVisbible(false);
  };

  const categoriesToDisplay = categoriesArr.map((category) => {
    return (
      <>
        <CategoryPreviewList
          key={category.id}
          category={category}
          clickRemoveCategory={deleteCategoryFromList}
        />
      </>
    );
  });

  const contestsToDisplay = constestArr.map((contest) => {
    return (
      <>
        <ContestPreview
          key={contest.id}
          contest={contest}          
          openCategoryList={openCategoryList}
          // removeCategoryFromContest={removeCategoryFromContest}
          updateRemoveContestCategories={updateRemoveContestCategories}
          updateCategory={updateCategory}
          handleClose={handleClose}
          isModalVisible={isModalVisible}
        />
      </>
    );
  });

  return (
    <>
      <div className="mainPage">
        <div className="categoriesFormAndList">
          <NewCategoryForm />
          <div className="categoryListContainer">{categoriesToDisplay}</div>
        </div>
        <div className="contestFormAndList">
          <NewContestForm
            clickAddCategoryFromList={addCategoryFromListForm}
          />
          <div className="contestListContainer">{contestsToDisplay}</div>
        </div>
      </div>
    </>
  );
};

export default ContestCreation;
