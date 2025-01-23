import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Navbar from "../../modules/autoNavbar"
import Footer from "./footer"
import Header from "./header"
import "./layout.scss"
import Slide from "./slide"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isHomePage, setIsHomePage] = React.useState(false)

  React.useEffect(() => {
    // Ottieni il pathname corrente rimuovendo il prefisso della base URL
    const pathname = window.location.pathname
      .replace(__PATH_PREFIX__, "")
      .replace(/\/$/, "")

    // Controlla se il percorso è una delle homepages
    const isHome =
      pathname === "" ||
      pathname === "/" ||
      pathname === "/en/home" ||
      pathname === "/it/home"

    setIsHomePage(isHome)
  }, []) // Esegui il controllo una sola volta al montaggio

  return (
    <>
      <div className="container-fluid p-0">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Navbar />
        {isHomePage && <Slide />}
        <main>
          <Container className="py-5">{children}</Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
