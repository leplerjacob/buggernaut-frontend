import React, {useState, useEffect, useLayoutEffect} from "react";
import {useDispatch} from 'react-redux'
import {logout} from '../actions/auth'
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import SidebarComponent from "./SidebarComponent";
import HeaderComponent from "./HeaderComponent";
import OverviewComponent from "./pages/OverviewComponent";
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

const useForceUpdate = () => {
  const [value, setValue] = useState(0)
  return () => setValue(value => value + 1)
}


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const DashboardPage = () => {
  const [selectedItem, setSelectedItem] = useState("Overview")
  
  const dispatch = useDispatch()
  const forceUpdate = useForceUpdate();
  
  useEffect(() => {
    window.removeEventListener("resize", forceUpdate());
  }, [])
  

  window.addEventListener("resize", useWindowSize());


  const renderSwitch = (selectedItem) => {
    switch (selectedItem) {
      case "Overview":
        return <OverviewComponent />;
      case "Projects":
        return <NewProjects />;
      case "Logout":
        dispatch(logout())
        return
      default:
        break;
    }
  };

    // const { selectedItem } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={(selectedItem) => setSelectedItem(selectedItem)}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>
            {renderSwitch(selectedItem)}
          </div>
        </Column>
      </Row>
    );
  }

export default DashboardPage