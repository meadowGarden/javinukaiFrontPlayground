import { useState } from "react";
import axios from "axios";
import "./NewContestForm.css";
import "./CommonStyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewContestForm = ({ clickAddCategoryFromList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [contestFormData, setContestFormData] = useState({
    contestName: "",
    description: "",
    categories: [{}],
    totalSubmissions: "",
    startDate: "",
    endDate: "",
  });

  const handleForm = (event) => {
    setContestFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContest = {
      contestName: contestFormData.contestName,
      description: contestFormData.description,
      categories: [
        {
          // id: "47e7c7df-34e8-44e6-aeca-b83e2a16f5c4",
          categoryName: "medicina ir panašiai",
          description: "slaugos mokslas",
          totalSubmissions: 150
        },
      ],
      totalSubmissions: contestFormData.totalSubmissions,
      startDate: contestFormData.startDate,
      endDate: contestFormData.endDate,
    };
    sendNewContest(newContest);
    // setIsLoading(true);
  };

  const sendNewContest = (contest) => {
    console.log(contest);
    axios
      .post("http://localhost:8080/api/v1/contests", contest)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <h1>contest form</h1>
        <div>
          <form className="contestFormContainer" onSubmit={handleSubmit}>
            <label>contest name</label>
            <input
              required
              type="text"
              name="contestName"
              value={contestFormData.contestName}
              onChange={handleForm}
              placeholder="konkurso pavadinimas"
              className="contestFormInputStyle"
            />

            <label>description</label>
            <input
              type="text"
              name="description"
              value={contestFormData.description}
              onChange={handleForm}
              placeholder="konkurso aprašymas"
              className="contestFormInputStyle"
            />

            <label>total submissions</label>
            <input
              required
              type="number"
              name="totalSubmissions"
              // defaultValue={50}
              placeholder="įkėlimų skaičius"
              value={contestFormData.totalSubmissions}
              onChange={handleForm}
              className="contestFormInputStyle"
            />

            <label>start date</label>
            <DatePicker
              name="startDate"
              selected={contestFormData.startDate}
              onChange={(date) =>
                setContestFormData({ ...contestFormData, startDate: date })
              }
              className="contestFormInputStyle"
            />

            <label>end date</label>
            <DatePicker
              name="endDate"
              selected={contestFormData.endDate}
              onChange={(date) =>
                setContestFormData({ ...contestFormData, endDate: date })
              }
              className="contestFormInputStyle"
            />

            <button
              onClick={() => clickAddCategoryFromList()}
              className="formAddCategoryButton"
              onChange={(category) =>
                setContestFormData({ ...contestFormData, categories: category })
              }
            >
              add category to contest
            </button>

            <button className="formSubmitButton">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewContestForm;
