import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./index.module.scss";

const Task = ({ data }) => {
  const { state, dispatch } = useContext(MainContext);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
    console.log(state);
  };
  const handleComplete = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
    console.log(state);
  };

  return (
    <>
      <div className={styles.Task}>
        <span
          className={data.completed ? styles.completed : undefined}
          onClick={() => handleComplete(data.id)}
        >
          {data.text} {data.completed && "✔️"}
        </span>
        <span onClick={() => handleDelete(data.id)}>❌</span>
      </div>
    </>
  );
};

export default Task;
