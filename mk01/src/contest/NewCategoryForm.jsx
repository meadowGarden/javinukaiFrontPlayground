import { useState } from "react";
import "./NewCategoryForm.css";
import axios from "axios";

const NewCategoryForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFormData, setCategoryFormData] = useState({
    categoryName: "",
    description: "",
    totalSubmissions: "",
  });

  const handleForm = (event) => {
    setCategoryFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    // event.preventDefault();
    const newCategory = {
      categoryName: categoryFormData.categoryName,
      description: categoryFormData.description,
      totalSubmissions: categoryFormData.totalSubmissions,
    };
    sendNewCategory(newCategory);
    setIsLoading(true);
  };

  const sendNewCategory = (newCategory) => {
    console.log(newCategory);
    axios
      .post("http://localhost:8080/api/v1/categories", newCategory)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>category form</h1>
        <div>
          <form className="categoryFormContainer" onSubmit={handleSubmit}>
            <label>category name</label>
            <input
              required
              type="text"
              name="categoryName"
              value={categoryFormData.categoryName}
              onChange={handleForm}
              placeholder="enter category name"
              className="categoryFormInputStyle"
            />

            <label>description</label>
            <input
              type="text"
              name="description"
              value={categoryFormData.description}
              onChange={handleForm}
              placeholder="enter description"
              className="categoryFormInputStyle"
            />

            <label> total submissions</label>
            <input
              required
              type="number"
              name="totalSubmissions"
              value={categoryFormData.totalSubmissions}
              onChange={handleForm}
              className="categoryFormInputStyle"
            />

            <button className="categoryFormSubmitButtonStyle">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCategoryForm;
