import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { useLocation } from "@reach/router"

import AutoNavbar from "../../modules/autoNavbar"
import Footer from "./footer"
import Header from "./header"
import "./layout.scss"
import Slide from "./slide"

import LangMenu from "../components/langMenu"

const Layout = ({ children }) => {
  const location = useLocation()

  // Controlla se la pagina attuale è la home
  const isHomePage = ["/", "/en/", "/it/"].includes(
    location.pathname.replace(/^\/inromeatlas/, ""),
  )

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Determina la lingua corrente in base all'URL oppure alla lingua preferita definita in gatsby-config.js
  const currentLang = ["en", "it"].map(l => {
      return location.pathname.includes(`/${l}/`) ? l : null
    })
    .filter(Boolean)[0] || 'en'

  return (
    <div className="container-fluid p-0">
      <Header siteTitle={data.site.siteMetadata?.title}>
        <div className="d-flex justify-content-end">
          <LangMenu
            currentLang={currentLang}
            availableLanguages={{"en": "English", "it": "Italiano"}}
            currentPath={location.pathname}
          />
        </div>
      </Header>

      <AutoNavbar
        currentLang={currentLang}
        siteTitle={data.site.siteMetadata?.title}
      />

      

      {isHomePage && <Slide />}
      <main>
        <Container className="py-5">{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
