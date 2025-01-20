import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"

function AutoNavbar(props) {
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

  // Ottieni la lingua corrente dall'URL
  const currentLanguage =
    typeof window !== "undefined"
      ? window.location.pathname.replace(withPrefix("/"), "").split("/")[0] ||
        "en"
      : "en"

  // Filtra le voci di menu per lingua corrente
  const filteredMenuItems = data.allMdx.nodes.filter(
    menuItem => menuItem.frontmatter.language === currentLanguage,
  )

  const handleLanguageChange = lang => {
    const currentPath = window.location.pathname
      .replace(withPrefix("/"), "")
      .replace(/\/$/, "") // Rimuove il prefisso e lo slash finale
    const currentSlug = currentPath.split("/").pop() // Ottieni lo slug della pagina corrente

    let newSlug

    // Cerca lo slug della pagina nella lingua selezionata
    const correspondingPage = data.allMdx.nodes.find(
      menuItem =>
        menuItem.frontmatter.language === lang &&
        menuItem.frontmatter.slug === currentSlug,
    )

    if (correspondingPage) {
      // Usa lo slug della pagina corrispondente
      newSlug = correspondingPage.frontmatter.slug
    } else {
      // Se non trovi una pagina corrispondente, usa "home" per entrambe le lingue
      newSlug = "home"
    }

    // Costruisci il nuovo percorso
    const newPath = withPrefix(
      lang === "en" ? `/en/${newSlug}` : `/it/${newSlug}`,
    )

    // Rimuovi doppie barre "//" se presenti
    navigate(newPath.replace(/\/\//g, "/"))
  }

  return (
    <Menu>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href={withPrefix(`/${currentLanguage}/`)}>
            {props.siteTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {filteredMenuItems.map((menuItem, index) => (
                <div className="containerLink" key={index}>
                  <Nav.Link
                    href={withPrefix(
                      `/${menuItem.frontmatter.language}/${menuItem.frontmatter.slug}`,
                    )}
                    className="nav-item my-2"
                  >
                    {menuItem.frontmatter.title}
                  </Nav.Link>
                </div>
              ))}
            </Nav>
            <div className="language-switcher">
              <button
                className={`btn ${
                  currentLanguage === "en"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <button
                className={`btn ${
                  currentLanguage === "it"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
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
    background-color: #ececec !important;
  }

  .language-switcher {
    display: flex;
    gap: 10px;
    margin-left: auto;
  }
`

export default AutoNavbar
