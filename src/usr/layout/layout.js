import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Navbar from "../../modules/autoNavbar"
import Footer from "./footer"
import Header from "./header"
import "./layout.scss"

const Slide = React.lazy(() => import("./slide")) // Lazy load dello slide

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
    // Controlla se il percorso è la homepage in inglese o italiano
    const pathname = window.location.pathname.replace(/\/$/, "") // Rimuovi slash finale
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
        <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
        {isHomePage && (
          <React.Suspense fallback={<div>Loading slide...</div>}>
            <Slide />
          </React.Suspense>
        )}
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
