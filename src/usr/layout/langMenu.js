import * as React from "react"
import { useStaticQuery, graphql, Link, withPrefix } from "gatsby"

const LangMenu = ({ currentLang, currentPath }) => {
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

  return (
    <div>
      <ul>
        {data.site.siteMetadata.availableLanguages.map((lang, index) => (
          lang !== currentLang &&
          <li key={index}>
            <Link href={withPrefix(currentPath.replace(`/${currentLang}/`, `/${lang}/`))}>{lang}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LangMenu
