import { useEffect } from "react";
import {
  useCurrentDetailsDispatch,
  useCurrentDetailsSelector,
} from "../../app/hooks";
import { getQuestionsAsync } from "./currentDetailsSlice";

const Questions = () => {
  const dispatch = useCurrentDetailsDispatch();
  const { questions, status } = useCurrentDetailsSelector(
    (state) => state.currentDetails
  );

  useEffect(() => {
    dispatch(getQuestionsAsync());
  }, []);

  if (status === "loading") {
    return <h1>Loading..</h1>;
  }
  return (
    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          <h2>{q.question}</h2>
          <input type={q.type} />
        </li>
      ))}
    </ul>
  );
};

export default Questions;
