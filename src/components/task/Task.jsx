import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./index.module.scss";

const Task = ({ data }) => {
  const { state, dispatch } = useContext(MainContext);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const handleComplete = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <>
      <div className={styles.Task} onClick={() => handleComplete(data.id)}>
        <span className={data.completed ? styles.completed : undefined}>
          {data.text} {data.completed && "✔️"}
        </span>
        <span className={styles.delete} onClick={() => handleDelete(data.id)}>
          ❌
        </span>
      </div>
    </>
  );
};

export default Task;
