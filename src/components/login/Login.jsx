import { useState, useContext } from "react";
import { MainContext } from "@/state";
import styles from "./index.module.scss";

const Login = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useContext(MainContext);

  const onHandleInput = (e) => {
    setInput(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: input,
    });
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit}>
        <input
          onChange={onHandleInput}
          value={input}
          type="text"
          placeholder="Your name..."
        />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
};

export default Login;
