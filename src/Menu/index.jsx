import * as React from "react";
import { Dropdown, Image, Menu as MenuUI, Segment } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import "./menu.css"

export default class Menu extends React.Component {
  render() {
    return (
      <Segment inverted className="Headest">
        <MenuUI inverted secondary pointing stackable>
          <MenuUI.Menu position="left">
            <MenuUI.Item className="logo" as={Link} to="/">
              <Image src="/logo.svg"/>
            </MenuUI.Item>
          </MenuUI.Menu>
          <MenuUI.Menu position="right">
            <MenuUI.Item as={NavLink} to="/" activeClassName="active" exact>
              Home
            </MenuUI.Item>
            <MenuUI.Item as={NavLink} to="/team" activeClassName="active">
              Team
            </MenuUI.Item>
            <Dropdown item text="Events">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/academic">
                  Academic
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/mentorship">
                  Mentorship
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/professional">
                  Professional
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/social">
                  Social
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/technical">
                  Technical
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/women-ece">
                  Women in ECE
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <MenuUI.Item as={NavLink} to="/podcast" activeClassName="active">
              Podcast
            </MenuUI.Item>
            {/* <MenuUI.Item as={NavLink} to="/login" activeClassName="active">
              Login
            </MenuUI.Item> */}
            <MenuUI.Item as={NavLink} to="/contact" activeClassName="active">
              Contact
            </MenuUI.Item>
          </MenuUI.Menu>
        </MenuUI>
      </Segment>
    );
  }
}
