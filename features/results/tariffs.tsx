import { useEffect } from "react";
import {
  useCurrentDetailsSelector,
  useResultsDispatch,
  useResultsSelector,
} from "../../app/hooks";
import { addTariff, getTariffsAsync } from "./resultsSlice";
const Tariffs = () => {
  const dispatch = useResultsDispatch();
  const { status, tariffs } = useResultsSelector((state) => state.results);

  useEffect(() => {
    dispatch(getTariffsAsync());
  }, []);

  if (status === "loading") {
    return <h1>Loading tariffs...</h1>;
  }

  return (
    <div>
      <h1>Tariffs</h1>
      <ul>
        {tariffs.map((t, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(addTariff(t));
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tariffs;
