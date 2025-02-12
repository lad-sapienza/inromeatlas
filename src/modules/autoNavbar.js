import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

function AutoNavbar({ currentLang, currentPath, siteTitle }) {
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
            language
          }
        }
      }
    }
  `)

  // Filtra le voci di menu per la lingua corrente
  const filteredMenuItems = data.allMdx.nodes.filter(
    menuItem => menuItem.frontmatter.language === currentLang
  )

  const handleLanguageChange = (lang) => {
    // Rimuove "/it/" o "/en/" dalla path corrente e mantiene lo slug
    const pathWithoutLang = currentPath.replace(/^\/(it|en)\//, "");
  
    // Genera il nuovo path con la lingua selezionata
    const newPath = `/${lang}/${pathWithoutLang}`.replace(/\/$/, ""); // Rimuove eventuali "/" finali
  
    navigate(newPath);
  };
  

  return (
    <Menu>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to={`/${currentLang}/`}>
            {siteTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {filteredMenuItems.map((menuItem, index) => (
                <div className="containerLink" key={index}>
                  <Nav.Link 
                    as={Link} 
                    to={menuItem.frontmatter.slug === "home" ? `/${menuItem.frontmatter.language}/` : `/${menuItem.frontmatter.language}/${menuItem.frontmatter.slug}`} 
                    className="nav-item my-2"
                  >
                    {menuItem.frontmatter.title}
                  </Nav.Link>
                </div>
              ))}
            </Nav>
            <div className="language-switcher">
              <button
                className={`btn ${currentLang === "en" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <button
                className={`btn ${currentLang === "it" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => handleLanguageChange("it")}
              >
                IT
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Menu>
  )
}

const Menu = styled.div`
  .bg-body-tertiary {
    background-color: #8b5a40 !important;
    padding: 0;
    border-top: 20px solid #3e281c;
  }
  .nav-item {
    padding: 0;
    margin: 0;
    color: #fff;
    border-right: 1px solid white;
  }
  .nav-item:hover {
    padding: 0;
    margin: 0;
    color: #000;
    border-right: 1px solid white;
  }
  .containerLink:hover {
    background-color: #a99e58;
  }
  .nav-link {
    padding: 0;
    width: 110px;
    text-align: center;
  }
  #basic-nav-dropdown {
    color: #fff;
  }
  .dropdown-menu {
    background-color: #a99e58;
    color: #fff;
    padding-left: 10px;
    border-radius: 0;
    border: none !important;
    margin: 0 !important;
  }
  .dropdown-item {
    border: 0 !important;
  }
  .dropdown-item:hover {
    background-color: #fff;
    color: #000;
  }
  .language-switcher {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
  }
  .language-switcher .btn {
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 3px;
    text-transform: uppercase;
  }
  .language-switcher .btn-primary {
    background-color: #a99e58;
    border-color: #a99e58;
  }
  .language-switcher .btn-primary:hover {
    background-color: #8b5a40;
    border-color: #8b5a40;
  }
  .language-switcher .btn-outline-primary {
    color: #a99e58;
    border-color: #a99e58;
  }
  .language-switcher .btn-outline-primary:hover {
    background-color: #a99e58;
    color: #fff;
  }
`

export default AutoNavbar
