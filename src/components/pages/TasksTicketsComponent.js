import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import { getCurrentTasksAndTickets } from "../../actions/projects";
import TicketsCardComponent from "../cards/TicketsCardComponent";
import TasksCardComponent from "../cards/TasksCardComponent";

const styles = StyleSheet.create({
  lastRow: {
    marginTop: 30,
  },
});

function TasksTicketsComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentTasksAndTickets());
  }, []);

  return (
    <Column>
      <Row horizontal="space-between" breakpoints={{ 1024: "column" }}>
        <TasksCardComponent />
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
