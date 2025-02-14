import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container fluid>
      <Row className="px-5 pt-5">
        <Col sm={8} xs={12} className="d-flex justify-content-start p-0">
          <div>
            <Link to={withPrefix("/")}>
              <StaticImage
                src="../images/INRome_logo_def.png"
                width={250}
                formats={["AUTO", "WEBP"]}
                alt={siteTitle}
              />
            </Link>
            <p className="header-title">{siteTitle}</p>
          </div>
        </Col>
        <Col sm={2} xs={6} className="d-flex justify-content-end logoMobile">
          <div>
            <a
              href="https://erc.europa.eu/homepage"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/erc-logo.svg"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="erc"
              />
            </a>
          </div>
        </Col>
        <Col sm={2} xs={6} className="d-flex justify-content-end logoMobile">
          <div>
            <a href="https://www.sns.it/it" target="_blank" rel="noreferrer">
              <StaticImage
                src="../images/logo-sns@2x_0.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="SNS"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </Header>
)

const Header = styled.header`
  .container-fluid {
    background-color: #8b5a40;
    min-height: auto;
  }
  .header-title {
    color: #fff;
    font-family: "Roboto";
    font-size: 1.2rem;
  }
`

export default HeaderSection
