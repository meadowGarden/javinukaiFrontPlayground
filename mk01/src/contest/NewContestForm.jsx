import { useState } from "react";
import axios from "axios";

const NewContestForm = () => {
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

  const sendNewContest = ({ contest }) => {
    axios
      .post("http://localhost:8080/api/v1/contests", contest)
      .then((response) => {
        // setNewDonor(response.data);
        // setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContest = {
      contestName: contestFormData.contestName,
      description: contestFormData.description,
      category: [{}],
      totalSubmissions: contestFormData.totalSubmissions,
      startDate: "",
      endDate: "",
    };
    console.log(newContest);
    sendNewContest(newContest);
    // setIsLoading(true);
  };

  return (
    <>
      <div>
        <h1>contest form</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label>contest name</label>
            <input
              required
              type="text"
              name="contestName"
              value={contestFormData.contestName}
              onChange={handleForm}
              placeholder="enter contest name"
            />

            <label>description</label>
            <input
              type="text"
              name="description"
              value={contestFormData.description}
              onChange={handleForm}
              placeholder="enter description"
            />

            <label> total submissions</label>
            <input
              required
              type="number"
              name="totalSubmissions"
              value={contestFormData.totalSubmissions}
              onChange={handleForm}
            />

            <label> start date</label>
            <input
              type="text"
              name="startDate"
              value={contestFormData.startDate}
              onChange={handleForm}
            />

            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewContestForm;
