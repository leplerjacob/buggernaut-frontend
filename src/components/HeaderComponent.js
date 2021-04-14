import React from "react";
import { string } from "prop-types";
import { StyleSheet, css } from "aphrodite";
import IconSearch from "../assets/icon-search";
import IconBellNew from "../assets/icon-bell-new";
import { Row } from "simple-flexbox";

const styles = StyleSheet.create({
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 14,
    border: "1px solid #DFE0EB",
  },
  container: {
    height: 40,
  },
  cursorPointer: {
    cursor: "pointer",
  },
  name: {
    "@media (max-width: 786px)": {
      display: "none",
    },
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
  },
  separator: {
    "@media (max-width: 786px)": {
      marginLeft: 12,
      marginRight: 12,
    },
    borderLeft: "1px solid #DFE0EB",
    marginLeft: 32,
    marginRight: 32,
    height: 32,
    width: 2,
  },
  title: {
    "@media (max-width: 786px)": {
      marginLeft: 36,
    },
    "@media (max-width: 486px)": {
      fontSize: 20,
    },
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: 0.3,
  },
});

function HeaderComponent(props) {
  const { icon, title, ...otherProps } = props;
  return (
    <Row
      className={css(styles.container)}
      vertical="center"
      horizontal="space-between"
      {...otherProps}
    >
      <span className={css(styles.title)}>{title}</span>
      <Row vertical="center">
        <div className={css(styles.iconStyles)}>
          <IconSearch />
        </div>
        <div className={css(styles.iconStyles)}>
          <IconBellNew />
        </div>
        <div className={css(styles.separator)}></div>
        <Row vertical="center">
          <span className={css(styles.name, styles.cursorPointer)}>
            John Doe
          </span>
          <img
            src="https://avatars3.githubusercontent.com/u/21162888?s=460&v=4"
            alt="avatar"
            className={css(styles.avatar, styles.cursorPointer)}
          />
        </Row>
      </Row>
    </Row>
  );
}

HeaderComponent.propTypes = {
  title: string,
};

export default HeaderComponent;
