import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { Row } from "simple-flexbox";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import IconBurger from "../assets/icon-burger";
import IconOverview from "../assets/icon-overview";
import IconProjects from "../assets/icon-projects";
import IconTickets from "../assets/icon-tickets";
import IconContacts from "../assets/icon-contacts";
import IconSettings from "../assets/icon-settings";

const styles = StyleSheet.create({
  burgerIcon: { cursor: "pointer", position: "absolute", left: 24, top: 34 },
  container: {
    backgroundColor: "#363740",
    width: 255,
    paddingTop: 32,
    height: "calc(100% - 32px)",
  },
  containerMobile: {
    transition: "left 0.5s, right0.5s",
    position: "absolute",
    width: 225,
    height: "calc(100% - 32px)",
    zIndex: 901,
  },
  menuItemList: {
    marginTop: 52,
  },
  outsideLayer: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900,
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh",
  },
  mainContainerMobile: {
    position: "absolute",
    width: "100%",
    minWidth: "100vh",
    top: 0,
    left: 0,
  },
  mainContainerExpanded: {
    width: "100%",
    minWidth: "100vh",
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
  hide: {
    left: -225,
  },
  show: {
    left: 0,
  },
});

class SidebarComponent extends React.Component {
  state = { expanded: false };

  onItemClicked = (item) => {
    this.setSTate({ expanded: false });
    return this.props.onChange(item);
  };

  isMobile = () => window.innerWidth <= 786;

  toggleMenu = () =>
    this.setState((prevState) => ({ expanded: !prevState.expanded }));

  renderBurger = () => {
    return (
      <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
        <IconBurger />
      </div>
    );
  };

  render() {
    const { expanded } = this.state;
    const isMobile = this.isMobile();

    return (
      <div stlye={{ position: "relative" }}>
        <Row
          className={css(styles.mainContainer)}
          breakpoints={{
            786: css(
              styles.mainContainerMobile,
              expanded && styles.mainContainerExpanded
            ),
          }}
        >
          {isMobile && !expanded && this.renderBurger()}
          <Column
            className={css(styles.container)}
            breakpoints={{
              768: css(
                styles.containerMobile,
                expanded ? styles.show : styles.hide
              ),
            }}
          >
            <LogoComponent />
            <Column className={css(styles.menuItemList)}>
              <MenuItemComponent
                title="Overview"
                icon={IconOverview}
                onClick={() => this.props.onChange("Overview")}
                active={this.props.selectedItem === "Overview"}
              />
              <MenuItemComponent
                title="Projects"
                icon={IconProjects}
                onClick={() => this.props.onChange("Projects")}
                active={this.props.selectedItem === "Projects"}
              />
              <MenuItemComponent
                title="Tasks/Tickets"
                icon={IconTickets}
                onClick={() => this.props.onChange("Tasks/Tickets")}
                active={this.props.selectedItem === "Tasks/Tickets"}
              />
              <MenuItemComponent
                title="Contacts"
                icon={IconContacts}
                onClick={() => this.props.onChange("Contacts")}
                active={this.props.selectedItem === "Contacts"}
              />
              <div className={css(styles.separator)}></div>
              <MenuItemComponent
                title="Settings"
                icon={IconSettings}
                onClick={() => this.props.onChange("Settings")}
                active={this.props.selectedItem === "Settings"}
              />
              <MenuItemComponent
                title="Logout"
                icon={IconSettings}
                onClick={() => this.props.onChange("Logout")}
                active={this.props.selectedItem === "Logout"}
              />
            </Column>
          </Column>
          {isMobile && expanded && (
            <div
              className={css(styles.outsideLayer)}
              onClick={this.toggleMenu}
            ></div>
          )}
        </Row>
      </div>
    );
  }
}

export default SidebarComponent;
