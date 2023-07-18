import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { MainContext } from "@/state";
import Task from "../task";

const Todo = () => {
  const [input, setInput] = useState("");

  const { state, dispatch } = useContext(MainContext);
  //   console.log(state);

  const onHandleToggle = () => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Math.random(),
          text: input,
          completed: false,
        },
      });
      setInput("");
    }
  };
  const onHandleInput = (e) => setInput(e.target.value);

  return (
    <div className={styles.Todo}>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={input}
          onChange={onHandleInput}
          placeholder="add todo..."
        />
        <input type="submit" value="Add" />
      </form>
      {state.todos.map((task, i) => (
        <Task data={task} key={i} />
      ))}
    </div>
  );
};

export default Todo;