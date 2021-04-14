import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  title: {
    fontFamily: "Multi",
    fontStyle: "normal",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#A4A6B3",
    opacity: 0.7,
    marginLeft: 12,
  },
});

function LogoComponent() {
  return (
    <Row
      className={css(styles.container)}
      horizontal="center"
      vertical="center"
    >
      {/* <div>Logo</div> */}
      <span className={css(styles.title)}>Buggernaut</span>
    </Row>
  );
}

export default LogoComponent;
