import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../actions/index";
import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
function Todo() {
  const [inputData, setInputData] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const List = useSelector((state) => state.todoReducers.List);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const AddClick = () => {
    if (inputData === "newData") {
      setError(true);
    } else {
      setError(false);
      if (selectedId) {
        dispatch(editTodo(selectedId, inputData));
        setSelectedId();
      } else {
        dispatch(addTodo(inputData));
      }
      setInputData("");
    }
  };
  const EditClick = (id, newdata) => {
    setSelectedId(id);
    setInputData(newdata);
  };
  return (
    <>
      <div className="todolist-main-container">
        <div className="todolist-small-container">
          <h1 className="todolist-heading">Your Todo List Here</h1>
          <div className="todolist-add-items">
            <input
              type="text"
              className={`todolist-placeholder ${error ? "error" : ""}`}
              placeholder="✍️add items...... "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            ></input>
            <button className="todolist-add-btn" onClick={AddClick}>
              {selectedId ? "Save" : "Add"}
            </button>
            {error && (
              <div className="error-message">
                Please enter a task before adding
              </div>
            )}
          </div>
          <div className="todolist-show-items">
            {List.map((elem) => {
              return (
                <div className="todolist-each-items" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todolist-btn">
                    <AiFillDelete
                      className="todolist-delete-btn"
                      title="delete"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    />
                  </div>
                  <div className="todolist-btn">
                    <MdModeEdit
                      className="todolist-edit-butn"
                      title="edit"
                      onClick={() => EditClick(elem.id, elem.data)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
