import styles from "./index.module.scss";
import { useContext, useState } from "react";
import { MainContext } from "@/state";
import Task from "../task";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/plugins/firebase";

const Todo = () => {
  const [input, setInput] = useState("");

  const { state, dispatch } = useContext(MainContext);
  //   console.log(state);

  const onHandleToggle = () => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: Math.random(),
      text: input,
      completed: false,
    };

    if (input === "") return;
    else {
      dispatch({
        type: "ADD_TODO",
        payload,
      });

      await addDoc(collection(db, "todos"), payload);
      console.log("inviato");

      setInput("");
    }
  };
  const onHandleLogout = (e) => {
    dispatch({
      type: "LOGOUT",
    });
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
      <button onClick={onHandleLogout}>Logout</button>
    </div>
  );
};

export default Todo;
