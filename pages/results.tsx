import type { NextPage } from "next";
import { Provider } from "react-redux";
import { resultsStore } from "../app/store";
import Tariffs from "../features/results/tariffs";

const ResultsPage: NextPage = () => {
  return (
    <Provider store={resultsStore}>
      <h1>Results</h1>
      <Tariffs />
    </Provider>
  );
};

export default ResultsPage;
