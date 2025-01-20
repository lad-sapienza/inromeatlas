import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Row, Col, Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

function Box({ language }) {
  // Testi e link in base alla lingua
  const content = {
    en: {
      collaborations: { text: "Collaborations", link: "/en/collaborations" },
      news: { text: "News", link: "/en/news" },
      output: { text: "Outputs", link: "/en/outputs" },
    },
    it: {
      collaborations: { text: "Collaborazioni", link: "/it/collaborazioni" },
      news: { text: "Notizie", link: "/it/notizie" },
      output: { text: "Risultati", link: "/it/risultati" },
    },
  }

  const localizedContent = content[language] || content.en

  return (
    <section className="py-5 text-center news">
      <Wrapper>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <Card>
                <Link to={localizedContent.collaborations.link}>
                  <StaticImage
                    src="../../images/progetti.png"
                    formats={["AUTO", "WEBP"]}
                    alt="collaborazioni"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.collaborations.text}
                    </h5>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <Link to={localizedContent.news.link}>
                  <StaticImage
                    src="../../images/news.png"
                    formats={["AUTO", "WEBP"]}
                    alt="news"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{localizedContent.news.text}</h5>
                  </div>
                </Link>
              </Card>
            </Col>
            <Col sm={4} xs={12}>
              <Card>
                <Link to={localizedContent.output.link}>
                  <StaticImage
                    src="../../images/output.png"
                    formats={["AUTO", "WEBP"]}
                    alt="output"
                    className="card-img-top"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {localizedContent.output.text}
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
      color: rgb(169, 158, 88);
      text-decoration: none;
    }
  }
`

export default Box
