import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setIsEditingIndex] = useState(null);

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoInput !== "") {
      if (!isEditing) {
        setTodos((prevTodos) => [...prevTodos, todoInput]);
        setValidationMessage("");
        setTodoInput("");
      } else {
        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[editingIndex] = todoInput;
          return updatedTodos;
        });
        setIsEditing(false);
        setTodoInput("");
        setIsEditingIndex(false);
      }
    } else {
      setValidationMessage("* Could not submit the empty task description");
    }
  };

  const handleDelete = (index) => {
    setTodos((todo) => todo.filter((item, i) => i !== index));
  };

  const handleEdit = (list, index) => {
    setIsEditing(true);
    setTodoInput(list);
    setIsEditingIndex(index);
  };

  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="w-2/4 border border-black p-4">
        <h2 className="font-bold text-lg text-center mb-4">Todo </h2>

        <form className="mb-2 flex" onSubmit={handleSubmit}>
          <input
            className="form-input w-full"
            onChange={handleChange}
            type="text"
            placeholder="Task Description..."
            value={todoInput}
          />

          <button
            className="min-w-[100px] ml-4 border border-black"
            type="submit"
          >
            {isEditing ? "Submit Edit" : "Add Task"}
          </button>
        </form>

        <p className="text-red-400 mb-6">{validationMessage}</p>

        <div>
          <h3 className="underline mb-2">Tasks</h3>

          {todos.length === 0 || todos.length < 0 ? (
            <p>No Task Added</p>
          ) : (
            <TodoList
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              lists={todos}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
