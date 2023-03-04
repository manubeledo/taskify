import React from "react";
import "../styles/InputForm.css";
import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        value={todo}
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
