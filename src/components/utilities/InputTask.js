import React, {useEffect} from "react";
import { StyleSheet, css } from "aphrodite";

const InputTask = ({ onChange, inputBox, users, index }) => {

  return (
    <div data-set={index}>
      <label>Add first task</label>
      <label>Task Title</label>
      <input
        className={inputBox}
        name="taskTitle"
        onChange={onChange}
        placeholder="Task title"
      ></input>
      <label>Task Description</label>
      <input
        className={inputBox}
        name="taskDescription"
        onChange={onChange}
        placeholder="Task title"
      ></input>
      <label>Assign To</label>
      <select
        name="taskAssignTo"
        type="dropdown"
        onChange={onChange}
      >
        <option defaultValue>Select User</option>
        {users.map((user) => {
          return (
            <option>
              {user.first_name} {user.last_name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputTask;
