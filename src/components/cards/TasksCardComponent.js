import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Column } from "simple-flexbox";
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    padding: "24px 32px 12px 32px",
  }
})

const TasksCardComponent = ({ tasks, changeStatus }) => {


  return (
    <Column>
      <h2>Tasks</h2>
      {tasks.map((task) => {
        return (
          <Row className={css(styles.taskCard)}>
            {task.title} | {task.description} | <button onClick={changeStatus} data-id={task.id}>{task.completed ? "Done" : "In progress"}</button>
          </Row>
        );
      })}
    </Column>
  );
};
export default TasksCardComponent;
