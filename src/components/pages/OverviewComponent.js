import React, {useEffect, useDispatch, useSelector} from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";
import ProjectMiniComponent from "../overview/ProjectMiniComponent";
import ProjectCommentsMiniComponent from '../overview/ProjectCommentsMiniComponent'
import TasksComponent from "../TasksComponent";

// New Components
import TasksMiniCardComponent from '../minicards/TasksMiniCardComponent'

const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30,
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0,
    },
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none",
    },
  },
  todayTrends: {
    marginTop: 30,
  },
  lastRow: {
    marginTop: 30,
  },
  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0,
    },
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30,
    },
  },
});

function OverviewComponent() {

  return (
    <Column>
      <Row
        horizontal="space-between"
        className={css(styles.lastRow)}
        breakpoints={{ 1024: "column" }}
      >
        <TasksMiniCardComponent  />
        <TasksComponent containerStyles={styles.tasks} />
      </Row>
      <Row
        horizontal="space-between"
        className={css(styles.lastRow)}
        breakpoints={{ 1024: "column" }}
      >
        <ProjectCommentsMiniComponent
          containerStyles={styles.unresolvedTickets}
        />
        <TasksComponent containerStyles={styles.tasks} />
      </Row>
    </Column>
  );
}

export default OverviewComponent;
