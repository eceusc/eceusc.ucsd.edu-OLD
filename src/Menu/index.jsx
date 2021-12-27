import * as React from "react";
import { Dropdown, Image, Menu as MenuUI, Segment } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <Segment inverted>
        <MenuUI inverted secondary pointing stackable>
          <MenuUI.Menu position="left">
            <MenuUI.Item as={Link} to="/">
              <Image src="/logo.png" size="small" />
            </MenuUI.Item>
          </MenuUI.Menu>
          <MenuUI.Menu position="right">
            <MenuUI.Item as={NavLink} to="/" activeClassName="active" exact>
              Home
            </MenuUI.Item>
            <MenuUI.Item as={NavLink} to="/about" activeClassName="active">
              About
            </MenuUI.Item>
            <Dropdown item text="Events">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/project-teams">
                  Academic
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/mentorship">
                  Mentorship
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/women-ece">
                  Professional
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/women-ece">
                  Social
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/women-ece">
                  Technical
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/women-ece">
                  Women in ECE
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <MenuUI.Item as={NavLink} to="/shadow" activeClassName="active">
              Shadow
            </MenuUI.Item>
            <MenuUI.Item as={NavLink} to="/about" activeClassName="active">
              Login
            </MenuUI.Item>
            <MenuUI.Item as={NavLink} to="/contact" activeClassName="active">
              Contact
            </MenuUI.Item>
          </MenuUI.Menu>
        </MenuUI>
      </Segment>
    );
  }
}
