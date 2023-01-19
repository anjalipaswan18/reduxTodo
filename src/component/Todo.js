import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../actions/index";
import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

function Todo() {
  const [inputData, setInputData] = useState("");
  const List = useSelector((state) => state.todoReducers.List);
  const dispatch = useDispatch();

  return (
    <>
      <div className="todolist-main-container">
        <div className="todolist-small-container">
          <h1 className="todolist-heading">Your Todo List Here</h1>
          <div className="todolist-add-items">
            <input
              type="text"
              className="todolist-placeholder"
              placeholder="✍️add items...... "
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            ></input>
            <button
              className="todolist-add-btn"
              onClick={() => {
                dispatch(addTodo(inputData));
                setInputData("");
              }}
            >
              <AiOutlinePlusCircle />
            </button>
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
                      onClick={() => dispatch(editTodo(elem.id))}
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
