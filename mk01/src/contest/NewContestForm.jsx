import { useState } from "react";
import axios from "axios";
import "./NewContestForm.css";
import "./CommonStyle.css";

const NewContestForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contestFormData, setContestFormData] = useState({
    contestName: "",
    description: "",
    category: [{}],
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
      category: [{}],
      totalSubmissions: contestFormData.totalSubmissions,
      startDate: handleForm.startDate,
      endDate: "",
    };
    console.log(newContest);
    sendNewContest(newContest);
    // setIsLoading(true);
  };

  const sendNewContest = (contest) => {
    axios
      .post("http://localhost:8080/api/v1/contests", contest)
      .then((response) => {
        console.log(response);
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
              placeholder="enter contest name"
              className="contestFormInputStyle"
            />

            <label>description</label>
            <input
              type="text"
              name="description"
              value={contestFormData.description}
              onChange={handleForm}
              placeholder="enter description"
              className="contestFormInputStyle"
            />

            <label>total submissions</label>
            <input
              required
              type="number"
              name="totalSubmissions"
              value={contestFormData.totalSubmissions}
              onChange={handleForm}
              className="contestFormInputStyle"
            />

            <label>start date</label>
            <input
              type="text"
              name="startDate"
              value={contestFormData.startDate}
              onChange={handleForm}
              className="contestFormInputStyle"
            />

            <label>end date</label>
            <input
              type="text"
              name="endDate"
              value={contestFormData.endDate}
              onChange={handleForm}
              className="contestFormInputStyle"
            />

            <button className="formSubmitButton">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewContestForm;
