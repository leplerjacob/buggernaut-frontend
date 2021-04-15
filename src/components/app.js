import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./OverviewComponent";
import NewProjects from "./projects/NewProject";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  content: {
    marginTop: 54,
  },
  mainBlock: {
    backgroundColor: "#F7F8FC",
    padding: 30,
  },
});

class App extends React.Component {
  state = { selectedItem: "Overview" };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componenWillMount() {
    window.removeEventListenever("resize", this.resize);
  }

  resize = () => this.forceUpdate();

  renderSwitch = (selectedItem) => {
    switch (selectedItem) {
      case "Overview":
        return <OverviewComponent />;
      case "Projects":
        return <NewProjects />;
      default:
        break;
    }
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>
            {this.renderSwitch(selectedItem)}
          </div>
        </Column>
      </Row>
    );
  }
}

export default App
