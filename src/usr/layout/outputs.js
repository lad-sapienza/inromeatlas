import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"

function Output() {
  return (
    <section className="py-5 text-center news">
      <Wrapper>
        <section className="py-5 text-center news">
          <Container>
            <Row className="mb-5">
              <Col sm={6} xs={12}>
                <Card>
                  <StaticImage
                    src="../../images/biblio.png"
                    formats={["AUTO", "WEBP"]}
                    alt="pubblicazioni"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pubblicazioni</h5>
                  </div>
                </Card>
              </Col>
              <Col sm={6} xs={12}>
                <Card>
                  <StaticImage
                    src="../../images/software.png"
                    formats={["AUTO", "WEBP"]}
                    alt="software"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Software</h5>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm={6} xs={12}>
                <Card>
                  <StaticImage
                    src="../../images/biblio.png"
                    formats={["AUTO", "WEBP"]}
                    alt="output"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pubblicazioni Pre-progetto</h5>
                  </div>
                </Card>
              </Col>
              <Col sm={6} xs={12}>
                <Card>
                  <StaticImage
                    src="../../images/biblio2.png"
                    formats={["AUTO", "WEBP"]}
                    alt="bibliografia"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Bibliografia</h5>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
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
      color: rgb(169, 158, 88);
      text-decoration: none;
    }
  }
`

export default Output
