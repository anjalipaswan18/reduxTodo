import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions/index";
import "./todo.css";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

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
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
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
                    <AiFillDelete />

                    <i
                      className="todolist-delete-btn"
                      title="delete"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    >
                      {/* <AiFillDelete /> */}
                    </i>
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
