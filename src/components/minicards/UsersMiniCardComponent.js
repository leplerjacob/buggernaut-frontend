import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersForProject } from "../../actions/users";
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
  
  let { id } = useSelector((state) => state.auth.user);
  let users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersForProject(id));
  }, []);

  const renderUserItem = (user) => {
    console.log(user)
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
