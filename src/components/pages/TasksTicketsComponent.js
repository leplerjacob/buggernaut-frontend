import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import { getAllOpenProjectsTasksAndTickets } from "../../actions/projects";
import {putChangeTaskStatus} from '../../actions/tasks'
import TicketsCardComponent from "../cards/TicketsCardComponent";
import TasksCardComponent from "../cards/TasksCardComponent";

const styles = StyleSheet.create({
  lastRow: {
    marginTop: 30,
  },
  projectCard: {
    margin: "8px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    padding: "24px 32px 12px 32px"
  }
});

function TasksTicketsComponent() {
  const projects = useSelector((state) => state.projects.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOpenProjectsTasksAndTickets());
  },[]);

  const [tasks, setTasks] = useState([])

  const onClick = (e) => {
    e.preventDefault()
    dispatch(putChangeTaskStatus(parseInt(e.target.getAttribute('data-id'))))
  }

  return (
    <Column>
      <Row>
        {projects.map((project) => {
          return (
            <Column className={css(styles.projectCard)} key={project.id} onClick={() => setTasks(project.tasks)}>
              <div>{"0" + project.id}</div>
              <div>{project.title}</div>
            </Column>
          );
        })}
      </Row>
      <Row horizontal="space-between" breakpoints={{ 1024: "column" }}>
        <TasksCardComponent tasks={tasks} changeStatus={onClick}/>
      </Row>
      <Row
        horizontal="space-between"
        className={css(styles.lastRow)}
        breakpoints={{ 1024: "column" }}
      >
        <TicketsCardComponent />
      </Row>
    </Column>
  );
}

export default TasksTicketsComponent;
