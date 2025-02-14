import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

function Output({ language }) {
  // Contenuti localizzati
  const content = {
    en: {
      publications: { text: "Publications", link: "/en/publications" },
      software: { text: "Software", link: "/en/software" },
      preProjectPublications: {
        text: "Pre-project Publications",
        link: "/en/pre-project-publications",
      },
      bibliography: { text: "Bibliography", link: "/en/bibliography" },
    },
    it: {
      publications: { text: "Pubblicazioni", link: "/it/pubblicazioni" },
      software: { text: "Software", link: "/it/software" },
      preProjectPublications: {
        text: "Pubblicazioni Pre-progetto",
        link: "/it/pubblicazioni-pre-progetto",
      },
      bibliography: { text: "Bibliografia", link: "/it/bibliografia" },
    },
  }

  const localizedContent = content[language] || content.en

  return (
    <section className="py-5 text-center news">
      <Wrapper>
        <Container>
          <Row className="mb-5">
            <Col sm={6} xs={12}>
              <Card>
                <Link to={localizedContent.publications.link}>
                  <StaticImage
                    src="../images/biblio.png"
                    formats={["AUTO", "WEBP"]}
                    alt="pubblicazioni"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.publications.text}
                    </h5>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={6} xs={12}>
              <Card>
                <Link to={localizedContent.software.link}>
                  <StaticImage
                    src="../images/software.png"
                    formats={["AUTO", "WEBP"]}
                    alt="software"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.software.text}
                    </h5>
                  </div>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12}>
              <Card>
                <Link to={localizedContent.preProjectPublications.link}>
                  <StaticImage
                    src="../images/biblio.png"
                    formats={["AUTO", "WEBP"]}
                    alt="output"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.preProjectPublications.text}
                    </h5>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={6} xs={12}>
              <Card>
                <Link to={localizedContent.bibliography.link}>
                  <StaticImage
                    src="../images/biblio2.png"
                    formats={["AUTO", "WEBP"]}
                    alt="bibliografia"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.bibliography.text}
                    </h5>
                  </div>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </section>
  )
}

//style
const Wrapper = styled.section`
  .news {
    background-color: #f3e9e3;
  }
  .card {
    border-radius: 1rem;

    &:hover img {
      opacity: 0.7 !important;
      transition: all 1s ease;
    }
  }

  .card-title a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #000;
      text-decoration: none;
    }
  }

  .card-body {
    background-color: rgb(169, 158, 88);
  }
  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
  }
`

export default Output
