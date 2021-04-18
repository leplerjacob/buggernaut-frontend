import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox";

const styles = StyleSheet.create({
  userName: {
    textAlign: "left",
  },
  userDetails: {
    textAlign: "right",
  },
});

const UsersMiniCardComponent = (props) => {
  const { users } = props;

  const renderUserItem = (user) => {
    return (
      <Row horizontal="space-around">
        <span className={css(styles.userName)}>
          {user.first_name} {user.last_name}
        </span>
        <span>{user.role}</span>
        <span className={css(styles.userDetails)}>Contact details</span>
      </Row>
    );
  };

  return (
    <Column>
      <Row>
        <span>Users | {users.length}</span>
      </Row>
      <Row>
        <Column>
          {users.map((user) => {
            return renderUserItem(user);
          })}
        </Column>
      </Row>
    </Column>
  );
};

export default UsersMiniCardComponent;
