import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SideBar from './Sidebar'

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
  },
});

function Dashboard() {
  return <Row className={css(styles.container)}>
      <SideBar />
      <Column >
        <div>Header</div>
        <div>Content</div>
      </Column>
  </Row>;
}

export default Dashboard;
