import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

/**
 * LangMenu component renders a language selection menu.
 *
 * @param {Object} props - The component props.
 * @param {string} props.currentLang - The current language code.
 * @param {string} props.currentPath - The current URL path.
 * @param {Array<string>} props.availableLanguages - The list of available language codes.
 * @returns {JSX.Element} The rendered component.
 */
const LangMenu = ({ currentLang, currentPath, availableLanguages }) => {
  return (
    <div className="pb-2">
        {Object.keys(availableLanguages).map(
          (lang, index) =>
            lang !== currentLang && (
              <span key={index}>
                <Link
                  to={ currentPath.replace(`/${currentLang}/`, `/${lang}/`) }
                  className="text-light"
                >
                  {availableLanguages[lang]}
                </Link>
              </span>
            ),
        )}
    </div>
  )
}

LangMenu.propTypes = {
  currentLang: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  availableLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default LangMenu
