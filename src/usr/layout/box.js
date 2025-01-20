import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"

function Box() {
  return (
    <section className="py-5 text-center news">
      <Wrapper>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../../images/progetti.png"
                  formats={["AUTO", "WEBP"]}
                  alt="collaborazioni"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Collaborations</h5>
                </div>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../../images/news.png"
                  formats={["AUTO", "WEBP"]}
                  alt="news"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">News</h5>
                </div>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <StaticImage
                  src="../../images/output.png"
                  formats={["AUTO", "WEBP"]}
                  alt="output"
                  className="card-img-top"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">Outputs</h5>
                </div>
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
      color: rgb(169, 158, 88);
      text-decoration: none;
    }
  }
`

export default Box
