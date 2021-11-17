import { Question } from "./currentDetailsSlice";

// A mock function to mimic making an async request for data
export function fetchQuestions() {
  return new Promise<{ data: Question[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            { question: "Redux?", type: "text" },
            { question: "Context?", type: "text" },
          ],
        }),
      1000
    )
  );
}
