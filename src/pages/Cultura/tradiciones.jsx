import React from "react";
import { useState } from "react";
import { Nav_bar_perfil } from "../../components/nav-bar-perfil";
import { Boton_back } from "../../components/boton-back";
import { Boton_next } from "../../components/boton-next";
import "../../scss/tradiciones_style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel, Button } from "react-bootstrap";

export function Tradiciones() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /**
   * Alternar la apertura y cierre de la barra lateral.
   *
   * Esta función cambia el estado de la variable 'isSidebarOpen' para controlar
   * si la barra lateral está abierta o cerrada. Si la barra lateral está abierta,
   * la función la cerrará y viceversa.
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <button
        className={`boton-toggler ${isSidebarOpen ? "open" : ""}`}
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isSidebarOpen && (
        <div>
          <Nav_bar_perfil />
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        </div>
      )}
      <main
        style={{ marginLeft: isSidebarOpen ? "310px" : "0" }}
        className={`contenedor-historia ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="historia-titulo">
          <h1>Tradiciones</h1>
        </div>

        <div className="contenido-tradiciones">
          <div className="cultura-parrafo">
            <p>
              La antigua civilización china estaba impregnada de una gran
              variedad de tradiciones culturales que se transmitían de
              generación en generación. Estas tradiciones abarcaban todos los
              aspectos de la vida, desde las celebraciones festivas hasta las
              prácticas religiosas y las costumbres diarias. A continuación, te
              sumergiré en un recorrido más extenso por algunas de las
              tradiciones culturales más destacadas de la antigua China:
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="mb-3">Tradiciones </h3>
              </div>

              <div className="col-12">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                >
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopLeftRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopLeftRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">1</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "red",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">2</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopRightRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopRightRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">3</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                                        <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopLeftRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopLeftRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">4</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "red",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">5</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopRightRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopRightRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">6</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopLeftRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopLeftRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">7</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "red",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">8</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div
                            className="fondo"
                            style={{
                              backgroundColor: "black",
                              borderTopRightRadius: "40px",
                              padding: "1rem",
                            }}
                          >
                            <img
                              className="img-fluid"
                              style={{ borderTopRightRadius: "25px" }}
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title">9</h4>
                            <p className="card-text">
                              With supporting text below as a natural lead-in to
                              additional content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Cultura"
            imagen="/images/cultura-icon.png"
            identificador={123}
            href="/cultura"
          />

          <Boton_next
            nombre="Artesanias"
            imagen="/images/artesanias-icono.png"
            identificador={123}
            href="/artesanias"
          />
        </div>
      </main>
    </>
  );
}
