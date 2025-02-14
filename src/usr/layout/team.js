import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Team = ({ language }) => {
  const linkPrefix = `/${language}`
  return (
    <Wrapper>
      <div>
        <section className="py-5 text-center">
          <Container>
            <Row>
              <h2>Scuola Normale Superiore</h2>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/barbara-borg.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Barbara Borg"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/borg`} className="card-link">
                        Barbara Borg
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      PI
                      <br />
                      Professor of Classical Archaeology
                      <br /> Scuola Normale Superiore
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/manetta2.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Consuelo Manetta"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/manetta`} className="card-link">
                        Consuelo Manetta
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Researcher in Classical Archaeology
                      <br />
                      Scuola Normale Superiore
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/dandrea.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Francesca d'Andrea"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/dandrea`} className="card-link">
                        Francesca d'Andrea
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Postdoctoral Researcher in Classical Archaeology
                      <br />
                      Scuola Normale Superiore
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/soldovieri2.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Umberto Soldovieri"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/soldovieri`}
                        className="card-link"
                      >
                        Umberto Soldovieri
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Postdoctoral Researcher in Classical Archaeology
                      <br />
                      Scuola Normale di Pisa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/campus.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Antonio Campus"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/campus`} className="card-link">
                        Antonio Campus
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Postdoctoral Researcher in Classical Archaeology
                      <br />
                      Scuola Normale di Pisa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/amadasi.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Maria Elisa Amadasi"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/amadasi`} className="card-link">
                        Maria Elisa Amadasi
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Postdoctoral Researcher in Classical Archaeology
                      <br />
                      Scuola Normale Superiore
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/meucci.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Davide Maria Meucci"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/meucci`} className="card-link">
                        Davide Maria Meucci
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Doctoral student
                      <br /> Scuola Normale di Pisa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/durand.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Clara Anne-Laure Hortense Durand"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/durand`}  className="card-link">
                        Clara Anne-Laure Hortense Durand
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Doctoral student
                      <br /> Scuola Normale di Pisa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/de_cinque.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Lorenzo De Cinque"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="normale">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/cinque`} className="card-link">
                        Lorenzo De Cinque
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Doctoral student
                      <br /> Scuola Normale di Pisa
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <h2>Sapienza Università di Roma</h2>

              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/orlandi.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Silvia Orlandi"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="sapienza">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/orlandi`} className="card-link">
                        Silvia Orlandi
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Professor of Latin Epigraphy
                      <br /> Sapienza Università di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/julian-bogdani-800x800.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Julian Bogdani"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="sapienza">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/bogdani`} className="card-link">
                        Julian Bogdani
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      GIS and Database Managing Systems Associate professor of
                      Methodogies for Archaeological Research
                      <br /> Sapienza Università di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/eiacopini.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Eleonora Iacopini"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="sapienza">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/iacopini`} className="card-link">
                        Eleonora Iacopini
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      GIS and Database Managing Systems Post-doctoral fellowship
                      of Methodogies for Archaeological Research
                      <br /> Sapienza Università di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/gabrielli.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt=" Chantall Gabrielli"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="sapienza">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/gabrielli`}
                        className="card-link"
                      >
                        Chantall Gabrielli
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Researcher
                      <br /> Sapienza Università di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <h2>AIT Austrian Institute of Technology</h2>

              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/Seidl.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Michael Seidl"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="ait">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/seidl`} className="card-link">
                        Michael Seidl
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Scientist
                      <br /> AIT Austrian Institute of Technology
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/vignoli_400x400.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Michela Vignoli"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="ait">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/vignoli`} className="card-link">
                        Michela Vignoli
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Scientist
                      <br /> AIT Austrian Institute of Technology
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <h2>Advisory Board</h2>

              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/bodel.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="John Bodel"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="adv">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/bodel`} className="card-link">
                        John Bodel
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      W. Duncan MacMillan II Professor of Classics and Professor
                      of History
                      <br /> Brown University
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/team_icon.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Domenico Palombi"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="adv">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/palombi`} className="card-link">
                        Domenico Palombi
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Professor of Classical Archaeology
                      <br /> Sapienza Università di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/team_icon.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Mirella Serlorenzi"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="adv">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/serlorenzi`}
                        className="card-link"
                      >
                        Mirella Serlorenzi
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Soprintendenza Speciale Archeologia, Belle Arti, Paesaggio
                      di Roma
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/team_icon.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Rita Volpe"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="adv">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/volpe`} className="card-link">
                        Rita Volpe
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Soprintendenza Capitolina ai Beni Culturali
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" lg="3" className="py-3">
                <Card>
                  <StaticImage
                    src="../images/adornato.jpg"
                    formats={["AUTO", "WEBP"]}
                    alt="Gianfranco Adornato"
                    className="card-img-top"
                    height={300}
                  />
                  <Card.Body className="adv">
                    <Card.Title className="border-bottom">
                      <Link to={`${linkPrefix}/adornato`}  className="card-link">
                        Gianfranco Adornato
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center">
                      Professor of Arte e Archeologia greca e romana
                      <br /> Scuola Normale Superiore
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Wrapper>
  )
}
//style
const Wrapper = styled.section`
  .card {
    border-radius: 1rem;

    &:hover img {
      opacity: 0.7 !important;
      transition: all 1s ease;
    }

    .normale {
    background-color:rgb(169, 158, 88)}

      .sapienza {
    background-color:rgb(128, 36, 51)}

      .ait, .adv {
    background-color:rgb(187, 187, 187)}



    .text-center {
    font-size: 0.7rem;
    color:#fff}


    .card-title a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #000;
        text-decoration: none;
      }
    }

    .card-link a {
      color: #ffffff;
      text-decoration: none
      
      &:hover {
        color: #000;
        text-decoration: none;
      }
    }
  }
`

export default Team
