import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox";
import {getTasksForProject} from "../../actions/tasks";

const styles = StyleSheet.create({
  taskTitle: {
    textAlign: "left",
  },
  taskDetails: {
    textAlign: "right",
  },
  
});

const TasksMiniCardComponent = (props) => {
  let {id} = useSelector((state) => state.auth.user);
  let tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // NOTE: Will pass the user_id for request.
  useEffect(() => {
    dispatch(getTasksForProject(id));
  }, []);

  const renderTaskItem = (task) => {
    return (
      <Row horizontal="space-around" key={task.id}>
        <span className={css(styles.taskTitle)}>{task.title}</span>
        <span>{task.description}</span>
        <span>{task.completed ? "completed" : "in progress"}</span>
        <span className={css(styles.taskDetails)}>More details</span>
      </Row>
    );
  };

  return (
    <Column>
      <Row>
        <span>Tasks | {tasks.length}</span>
      </Row>
      <Row>
        <Column>
          {tasks.map((task) => {
            return renderTaskItem(task);
          })}
        </Column>
      </Row>
    </Column>
  );
};

export default TasksMiniCardComponent;
