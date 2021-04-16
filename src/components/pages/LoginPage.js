import React from "react";
import LoginForm from '../login/LoginForm';
import { Row, Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginContainer: {
    height: "100vh",
    width: "100%",
  },
});

function LoginPage() {
  return (
    <Column className={css(styles.loginContainer)}  vertical="space-around">
      <Row horizontal="space-around">
        <LoginForm />
      </Row>
    </Column>
  );
}

export default LoginPage;
