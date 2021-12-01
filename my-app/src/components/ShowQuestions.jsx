import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowQuestions = (props) => {
  const [ques, setQuestions] = useState({
    questions: [],
  });
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/admin/getQuestions/${props.match.params.testPaperCode}`
      )
      .then((res) => {
        setQuestions({ questions: res.data });
        console.log(ques.questions);
      })
      .catch((err) => console.log(err));
  }, [ques.questions]);

  const deleteHandler = (Id) => {
    console.log(Id);
    axios
      .delete(`http://localhost:8080/admin/deleteQuestion/${Id}`)
      .then((res) => {
        const questions = ques.questions.filter(
          (question) => question.Id !== Id
        );
        setQuestions({ questions: questions });
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <>
      <div className="bg-light py-2">
        <p className="h2 mt-3 py-3">Multiple Choice Questions</p>
        {ques.questions.map((question) => (
          <div key={question.Id}>
            <div className="float-start">
              <strong>
                <p className="d-inline-block mx-3" id="question">
                  {question.questionNo}&#41; &nbsp; {question.question}
                </p>
              </strong>
              <span>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteHandler(question.id)}
                >
                  Delete
                </button>
              </span>
            </div>
            <main>
              <br />
              <br />
            </main>
            <div>
              <p className="text-start mx-3">
                &nbsp;&nbsp;1. &nbsp;{question.option1}
              </p>
              <p className="text-start mx-3">
                &nbsp;&nbsp;2. &nbsp;{question.option2}
              </p>
              <p className="text-start mx-3">
                &nbsp;&nbsp;3. &nbsp;{question.option3}
              </p>
              <p className="text-start mx-3">
                &nbsp;&nbsp;4. &nbsp;{question.option4}
              </p>
            </div>
            <aside>
              <p className="text-muted text-start mx-3">
                Correct Answer: {question.correctAnswer}
              </p>
            </aside>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowQuestions;
