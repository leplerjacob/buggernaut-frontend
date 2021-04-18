import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    padding: "24px 32px 12px 32px",
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

class CardComponentOneFourth extends React.Component {
  renderItem(item, index) {
    return (
      <Column
        flexGrow={1}
        className={css(styles.itemContainer)}
        key={`item-${index}`}
        breakpoints={{ 426: css(styles.itemContainerMobile) }}
      >
        {item}
      </Column>
    );
  }

  render() {
    const { title, subtitle, items, containerStyles } = this.props;
    return (
      <Column
        flexGrow={1}
        className={css(styles.container, containerStyles)}
        breakpoints={{ 426: css(styles.containerMobile) }}
      >
        <Row horizontal="space-between">
          <Column flexGrow={1}
            className={css(styles.itemContainer)}
          >
            <Column>Something</Column>
            <Column>Something</Column>
            <Column>Something</Column>
          </Column>
          {/* <Column>
            <Row style={{ marginTop: 8, marginBottom: 16 }}>
              <span className={css(styles.subtitle)}>{subtitle}</span>
            </Row>
          </Column> */}
        </Row>
      </Column>
    );
  }
}
export default CardComponentOneFourth;
