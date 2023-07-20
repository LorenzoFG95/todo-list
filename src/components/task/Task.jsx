import { useContext } from "react";
import { MainContext } from "@/state";
import styles from "./index.module.scss";
import { deleteDoc } from "firebase/firestore";

const Task = ({ data }) => {
  const { state, dispatch } = useContext(MainContext);

  const handleDelete = async (e) => {
    // if (e.pageX >= 0) {
    dispatch({ type: "DELETE_TODO", payload: data.id });
    // try {
    // await deleteDoc(doc(db, "todos", data.id));
    // } catch (e) {}
    // }
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
