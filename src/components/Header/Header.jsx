import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components";

const MyLink = styled(Nav.Link)`
  &&.nav-link.active {
    color: #2375e1;
  }
  &&.nav-link:hover {
    color: #2375e1;
  }
  ${(props) =>
    props.under &&
    css`
      &&.nav-link {
        border-bottom: 2px solid transparent;
      }
      &&.nav-link.active {
        color: #2375e1;
        border-bottom: 2px solid #2375e1;
      }
      &&.nav-link:hover {
        color: #2375e1;
      }
    `}
`;
const Header = () => {
  return (
    <>
      <Navbar>
        <Nav className="me-auto my-2 my-lg-0 mx-2">
          <MyLink href="https://github.com/artioki">
            <FontAwesomeIcon icon="fa-solid fa-angle-left" /> User Pages
          </MyLink>
        </Nav>
        <Nav>
          <MyLink className="my" href="#action1">
            <FontAwesomeIcon icon="fa-regular fa-bell" />
          </MyLink>
          <MyLink className="my" href="#action2">
            <FontAwesomeIcon icon="fa-regular fa-user" />
          </MyLink>
        </Nav>
      </Navbar>
      <div style={{ background: "#DDE0E6", height: "1px" }}></div>

      <Navbar className=" py-0" style={{ pading: "0px 32px" }} expand="md">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0 d-flex flex"
            style={{ width: "100%" }}
          >
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              as={NavLink}
              to="/"
            >
              <FontAwesomeIcon icon="fa-solid fa-list" /> Activity
            </MyLink>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              as={NavLink}
              to="/map"
            >
              <FontAwesomeIcon icon="fa-regular fa-map" /> Map
            </MyLink>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              as={NavLink}
              to="/timer"
            >
              <FontAwesomeIcon icon="fa-solid fa-gear" /> Timer
            </MyLink>
            <div style={{ margin: "auto" }}></div>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              href="#action3"
            >
              <FontAwesomeIcon icon="fa-regular fa-note-sticky" /> Notes
            </MyLink>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              href="#action4"
            >
              <FontAwesomeIcon icon="fa-regular fa-user" /> Friends
            </MyLink>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              href="#action5"
            >
              <FontAwesomeIcon icon="fa-regular fa-user" /> Photos
            </MyLink>
            <MyLink
              under={"true"}
              className="px-0 mx-2 nav-link"
              href="#action6"
            >
              <FontAwesomeIcon icon="fa-solid fa-gear" />{" "}
              <FontAwesomeIcon icon="fa-solid fa-angle-down" />
            </MyLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
