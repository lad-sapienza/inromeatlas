import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Col, Container, Row } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container fluid>
      <Row className="px-5 pt-5">
        <Col sm={8} xs={12} className="d-flex justify-content-start p-0">
          <div>
            <Link to="/">
              <StaticImage
                src="../../images/INRome_logo_def.png"
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
            <Link
              href="https://erc.europa.eu/homepage"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../../images/erc-logo.svg"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="erc"
              />
            </Link>
          </div>
        </Col>
        <Col sm={2} xs={6} className="d-flex justify-content-end logoMobile">
          <div>
            <Link href="https://www.sns.it/it" target="_blank" rel="noreferrer">
              <StaticImage
                src="../../images/logo-sns@2x_0.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="SNS"
              />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="lang px-1 pt-1">
        <Col sm={11} xs={12} className="d-flex justify-content-start p-0">
          <div></div>
        </Col>
      </Row>
    </Container>
  </Header>
)
//style
const Header = styled.section`
  .container-fluid {
    background-color: #8b5a40;
    min-height: auto;
  }
  .header-title {
    color: #fff;
    font-family: "Roboto";
    font-size: 1.2rem;
  }

  .lang {
    color: #fff;
    font-size: 0.9rem;
    background-color: #3e281c;
    width: 100%;
    margin: 0;
    min-height: 20px;
    text-align: center;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: rgb(169, 158, 88);
    text-decoration: none;
  }
`

export default HeaderSection
