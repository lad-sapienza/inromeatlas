import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container fluid>
        <Row className="px-5 py-5">
          <Col sm={2} xs={12} className="d-flex ">
            <div>
              <Link to="/">
                <StaticImage
                  src="../images/INRome_logo_def.png"
                  width={140}
                  quality={30}
                  formats={["AUTO", "WEBP"]}
                  alt="InRome"
                  className="img-fluid"
                />
              </Link>
              <p className="footer-title">© Scuola Normale Superiore</p>
            </div>
          </Col>

          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a href="https://www.sns.it/it" target="_blank" rel="noreferrer">
              <StaticImage
                src="../images/logo-sns@2x_0.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="SNS"
              />
            </a>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a
              href="https://www.uniroma1.it/it/pagina-strutturale/home"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/sapienza.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="Sapienza Università di Roma"
              />
            </a>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a
              href="https://www.ait.ac.at/en/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/ait-logo_blog.svg"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="AIT"
              />
            </a>
          </Col>
          <Col sm={2} xs={6} className="d-flex justify-content-end">
            <a
              href="https://erc.europa.eu/homepage"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                src="../images/eu-erc.png"
                height={71}
                quality={30}
                formats={["AUTO", "WEBP"]}
                alt="EU"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

//style
const Footer = styled.footer`
  .container-fluid {
    background-color: #8b5a40;
    border-bottom: #3e281c solid 1rem;
    min-height: auto;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
  }
  a:hover {
    color: #000;
    text-decoration: none;
    font-size: 0.7rem;
  }
  .footer-link {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0 2rem 0 2rem;
  }
  .footer-link:hover {
    color: #000;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0 2rem 0 2rem;
  }

  .footer-title {
    color: #fff;
    font-family: "Cinzel";
    font-size: 0.6rem;
  }
  .Link-footer {
    width: 100%;
    text-align: center;
    padding: 20px;
  }
`

export default FooterSection
