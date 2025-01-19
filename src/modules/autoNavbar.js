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
      ? window.location.pathname.split("/")[1] || "en"
      : "en"

  // Filtra le voci di menu per lingua corrente
  const filteredMenuItems = data.allMdx.nodes.filter(
    menuItem => menuItem.frontmatter.language === currentLanguage,
  )

  const handleLanguageChange = lang => {
    const currentPath = window.location.pathname.replace(/\/$/, "") // Rimuove eventuale "/" finale
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
    const newPath = lang === "en" ? `/en/${newSlug}` : `/it/${newSlug}`

    // Rimuovi doppie barre "//" se presenti
    navigate(newPath.replace(/\/\//g, "/"))
  }

  return (
    <Menu>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
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
                className={`btn ${currentLanguage === "en" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
              <button
                className={`btn ${currentLanguage === "it" ? "btn-primary" : "btn-outline-primary"}`}
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
    background-color: rgb(110, 80, 63) !important;
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
    color: #000;
    background-color: #a99e58;
  }

  .containerLink {
    display: inline-block;
    width: 110px;
    text-align: center;
  }

  .containerLink:hover {
    background-color: #a99e58;
  }

  .nav-link {
    padding: 10px 0;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .nav-link:hover {
    color: #000;
    background-color: #a99e58;
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
    color: #fff;
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
