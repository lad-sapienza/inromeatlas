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

  const location = useLocation()

  
  // Controlla se la pagina attuale è la home
  const isHomePage = ["/", "/en/", "/it/"].includes(location.pathname.replace(/^\/inromeatlas/, ""))

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          availableLanguages
          preferredLanguage
        }
      }
    }
  `)

  // Determina la lingua corrente in base all'URL oppure alla lingua preferita definita in gatsby-config.js
  let currentLang;
  if (
    data.site.siteMetadata.availableLanguages &&
    data.site.siteMetadata.preferredLanguage
  ) {
    currentLang = data.site.siteMetadata.availableLanguages
      ?.map(l => {
        return location.pathname.includes(`/${l}/`) ? l : null
      })
      .filter(Boolean)[0]
    if (!currentLang) {
      currentLang = data.site.siteMetadata.preferredLanguage
    }
  }

  return (
    <div className="container-fluid p-0">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <AutoNavbar currentLang={currentLang} currentPath={location.pathname} />
      {isHomePage && <Slide />}
      <main>
        <Container className="py-5">{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
