import DashboardIcon from '../assets/dashboard-icon'
import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  outerContainer: {
    height: "100%",
    minHeight: "100vh"
  },
  innerContainer: {
      backgroundColor: "#020025",
      width: "250px",
      height: "calc(100% - 32px)"
  }

});

export const SideBar = () => {
  return (
    <div style={{position: "relative"}}>
      <Row className={css(styles.outerContainer)}>
        <Column className={css(styles.innerContainer)}>
            <div style={{color: 'white'}}>Logo</div>
            <Column>
                
            </Column>
        </Column>
      </Row>
    </div>
  );
};

export default SideBar;
