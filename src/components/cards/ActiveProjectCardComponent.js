import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Row, Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import TasksMiniCardComponent from "../minicards/TasksMiniCardComponent";
import UsersMiniCardComponent from "../minicards/UsersMiniCardComponent";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    padding: "24px 32px 12px 32px",
    // maxWidth: "500px",
    fontSize: "14px"
  },
  containerMobile: {
    padding: "12px 16px 6px 16px !important",
  },
  itemContainer: {
    marginLeft: -32,
    marginRight: -32,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 18,
    paddingTop: 18,
    maxHeight: 22,
    borderBottom: "1px solid #DFE0EB",
    ":last-child": {
      borderBottom: "none",
    },
  },
  itemContainerMobile: {
    marginLeft: -16,
    marginRight: -16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#252733",
  },

});

const ActiveProjectCardComponent = (props) => {

  

  return (
    <Column
      flexGrow={1}
      className={css(styles.container, props.containerStyles)}
      breakpoints={{ 426: css(styles.containerMobile) }}
    >
      <Row
        flexGrow={1}
        horizontal="space-between"
      >
        <span className={css(styles.title)}>Project Title</span>
        <Column>
          <span>Start Date</span>
          <span>End Date</span>
          <span>In Progress</span>
        </Column>
      </Row>
      <Row>
        <span>Project Description</span>
      </Row>
      <Row>
        <Column>
          <TasksMiniCardComponent />
        </Column>
      </Row>
      <Column>
        <UsersMiniCardComponent />
      </Column>
    </Column>
  );
};

export default ActiveProjectCardComponent;
