import React from 'react'
import { PlanWrap, Title, Row, Col, Terms, Explore } from './PlansStyles';
import { SecondaryButton } from '../Layout/LayoutStyles';

const Plans = () => {
    return (
        <section className="plans">
            <PlanWrap>
                <Title>Elige tu plan</Title>
                <div>
                    <Row className="plans">
                        <Col className="big"></Col>
                        <Col className="small">
                            <span className="promo"></span>
                            <h5>Free</h5>
                            <h6>$ 0</h6>
                            <p>No te pediremos tarjeta de crédito. Nunca.</p>
                            <SecondaryButton color="white">Regístrate gratis</SecondaryButton>
                        </Col>
                        <Col className="small">
                            <span className="promo blue">1 mes gratis</span>
                            <h5>Premium</h5>
                            <h6>$ 115.00 al mes</h6>
                            <p>Escucha música sin límites. Cancela cuando quieras.</p>
                            <SecondaryButton color="black">Cámbiate a Premium</SecondaryButton>
                        </Col>
                    </Row>
                    <Row className="only-movil">
                        <Col className="big"></Col>
                        <Col className="small">
                            <p>Free</p>
                        </Col>
                        <Col className="small">
                            <p>Premium</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Descubre millones de canciones nuevas y clásicas.</p>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Descubre millones de episodios de podcasts.</p>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Crea tus propias playlists.</p>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Disfruta de las playlists que creamos solo para ti.</p>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Escucha música sin anuncios.</p>
                        </Col>
                        <Col className="small"></Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Escucha música sin anuncios.</p>
                        </Col>
                        <Col className="small"></Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="big">
                            <p className="bonus">Escucha música sin anuncios.</p>
                        </Col>
                        <Col className="small"></Col>
                        <Col className="small">
                            <span className="icon"></span>
                        </Col>
                    </Row>
                </div>
                <Terms>
                    <a href="/">Se aplican Términos y Condiciones. </a>
                      El mes gratis no está disponible para los usuarios que ya hayan probado Premium.
                </Terms>
                <Explore>
                    <p>Explora más planes Premium para estudiantes universitarios, parejas y familias.</p>
                    <SecondaryButton color="white">Ver planes</SecondaryButton>
                </Explore>
            </PlanWrap>
        </section>
    )
}

export default Plans;
