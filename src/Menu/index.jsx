import * as React from "react";
import { Dropdown, Image, Menu as MenuUI, Segment } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import "./menu.css";

export default class Menu extends React.Component {
  render() {
    return (

      // <div className="navbar">
      //   <div>
      //     <Image src="/logo.svg"/>
      //   </div>
      //   <div>
      //     <a href="/">Home</a>
      //     <div class="dropdown">
      //     <button class="dropbtn">Committees
      //       <i class="fa fa-caret-down"></i>
      //     </button>
      //         <div class="dropdown-content">
      //           <a href="/academic">Academics</a>
      //           <a href="/mentorship">Mentorship</a>
      //           <a href="/professional">Professional</a>
      //         </div>
      //       </div>
      //     </div>
      // </div>

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
            <Dropdown item text="Committees">
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
            {/* <Dropdown item text="Our Team">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/team">
                  Meet the Team
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/join">
                  Join the Team
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </MenuUI.Menu>
        </MenuUI>
      </Segment>
    );
  }
}
