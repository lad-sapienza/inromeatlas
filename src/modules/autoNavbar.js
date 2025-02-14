import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import LangMenu from "../usr/layout/langMenu"

function AutoNavbar({ currentLang, currentPath }) {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { menu_position: { gt: 0 } } }
        sort: { frontmatter: { menu_position: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            slug
            title
            menu_position
          }
        }
      }
    }
  `)
  return (
    <Menu>
      <LangMenu currentLang={currentLang} currentPath={currentPath} />
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {data.allMdx.nodes.map(
                (menuItem, index) =>
                  currentLang &&
                  menuItem.frontmatter.slug.includes(`${currentLang}/`) && (
                    <div className="containerLink" key={index}>
                      <Nav.Link
                        href={withPrefix(`/${menuItem.frontmatter.slug}`)}
                        className="nav-item my-2"
                      >
                        {menuItem.frontmatter.title}
                      </Nav.Link>
                    </div>
                  ),
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Menu>
  )
}

//style
const Menu = styled.div`
  .bg-body-tertiary {
    background-color: #ececec !important;
  }
`
export default AutoNavbar
