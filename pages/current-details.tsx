import type { NextPage } from "next";
import { Provider } from "react-redux";
import { currentDetailsStore } from "../app/store";
import Questions from "../features/currentDetails/questions";

const CurrentDetailsPage: NextPage = () => {
  return (
    <Provider store={currentDetailsStore}>
      <h1>Current Details</h1>
      <Questions />
    </Provider>
  );
};

export default CurrentDetailsPage;
