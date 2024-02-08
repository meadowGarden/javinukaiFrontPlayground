import { useEffect, useState } from "react";
import axios from "axios";
import ContestPreview from "./ContestPreview";
import "./ContestCreation.css";
import NewContestForm from "./NewContestForm";
import NewCategoryForm from "./NewCategoryForm";
import CategoryPreviewList from "./CategoryPreviewList";

const ContestCreation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [constestArr, setContestArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/categories")
      .then((response) => {
        setCategoriesArr(response.data);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/contests")
      .then((response) => {
        setContestArr(response.data);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  // const addCategory = (category) => {
  //   console.log(category);
  //   axios
  //     .post("http://localhost:8080/api/v1/categories", category)
  //     .then((response) => {
  //       console.log(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const removeCategory = (category) => {
    axios
      .delete(`http://localhost:8080/api/v1/categories/${category?.id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const updateCategory = (category) => {
    axios
      .put(`http://localhost:8080/api/v1/categories/${category?.id}`, category)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }

  const categoriesToDisplay = categoriesArr.map((category) => {
    return (
      <>
        <CategoryPreviewList
          key={category.id}
          category={category}
          clickRemoveCategory={removeCategory}
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
          removeCategory={removeCategory}
          updateCategory={updateCategory}
        />
      </>
    );
  });

  return (
    <>
      <div className="mainPage">
        <NewCategoryForm />
        <div className="categoryListContainer">{categoriesToDisplay}</div>
        <NewContestForm />
        <div className="contestListContainer">{contestsToDisplay}</div>
      </div>
    </>
  );
};

export default ContestCreation;
