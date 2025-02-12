import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { useLocation } from "@reach/router"

import AutoNavbar from "../../modules/autoNavbar"
import Footer from "./footer"
import Header from "./header"
import "./layout.scss"
import Slide from "./slide"

const Layout = ({ children }) => {
  const location = useLocation();

  // Determina la lingua in base al percorso
  const lang = location.pathname.includes('/it/') ? 'it' : 'en';

  // Controlla se la pagina corrente è la home // @TODO DA CAMBIARE PATH IN PRODUZIONE
  const isHomePage =
    location.pathname === "inromeatlas/" ||
    location.pathname === "inromeatlas/en/" ||
    location.pathname === "inromeatlas/it/";

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <AutoNavbar currentLang={lang} currentPath={location.pathname} />
      {isHomePage && <Slide />}
      <main>
        <Container className="py-5">{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
