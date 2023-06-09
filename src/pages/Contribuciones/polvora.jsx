import { Boton_back } from "../../components/boton-back";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../scss/polvora_style.css";

export function Polvora() {
  const [index, setIndex] = useState(0);

  /**
   *
   *Cambia el índice del carrusel al seleccionar una diapositiva.
   *@param {number} selectedIndex - El índice de la diapositiva seleccionada.
   *@param {Object} e - El evento de selección.
   *
   **/

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className="titulo-polvora text-center">Invención de la polvora</h1>
      <div className="container page-polvora text-center">
        <div className="row">
          <div
            className="col-sm"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="sketchfab-embed-wrapper">
              <iframe
                style={{
                  width: "500px",
                  height: "680px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                }}
                frameBorder="0"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/3d-models/pandaren-fireworks-cart-2db44face8834abc94de8883001fb5ad/embed"
              ></iframe>
            </div>
          </div>
          <div
            className="col-sm"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="info-polvora">
              

              
              <p>
                <strong>Origen y desarrollo:</strong>

                <br></br>

                La pólvora fue inventada en China durante la dinastía Tang, alrededor del siglo IX d.C.
                Se cree que los alquimistas chinos, mientras buscaban elixires para la inmortalidad, descubrieron accidentalmente 
                la fórmula de la pólvora al combinar ingredientes como el azufre, el carbón vegetal y el salitre (nitrato de potasio).


              </p>
              <p>
                <strong>Aplicaciones iniciales:</strong>

                <br></br>

                En sus primeras etapas, la pólvora se utilizó principalmente para fines pirotécnicos y ceremoniales, como fuegos artificiales y
                espectáculos de entretenimiento.
                También se usó en rituales religiosos y para asustar a los espíritus malignos.
              </p>

              <p>
                <strong>Aplicaciones militares:</strong>
                <br></br>

                Con el tiempo, se descubrió el potencial militar de la pólvora. Durante la dinastía Song (siglo X d.C.), los chinos comenzaron a 
                utilizarla en armas de guerra.
                Las aplicaciones militares de la pólvora incluyeron el desarrollo de cañones, cohetes, flechas explosivas y bombas.



              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <Carousel activeIndex={index} onSelect={handleSelect}>

              
            <Carousel.Item>
            <iframe
                style={{
                  width: "1000px",
                  height: "500px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                }}
                frameBorder="0"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://www.youtube.com/embed/n2h4D6h3d4w"
                
              ></iframe>

                
              </Carousel.Item>


              <Carousel.Item>
              <iframe
                style={{
                  width: "1000px",
                  height: "500px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                }}
                frameBorder="0"
                allowFullScreen={true}
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/3d-models/rosita-wicke-castillo-de-la-mota-san-sebastian-15b200af9edd472490f10cf1188a2962/embed"
              ></iframe>
                <Carousel.Caption>
                  <h3>
                  Cañones de polvora:
                  </h3>
                  <p>
                  En la antigua China, los cañones eran conocidos como "huochong" o "huopao", que se traduce como "tubo de fuego".
                  Eran cilindros de metal, generalmente hechos de bronce, y tenían una estructura similar a la de los cañones de cañón 
                  posteriores. Estos cañones primitivos eran rudimentarios en comparación con las armas de fuego modernas, pero aún así
                  demostraron ser formidables en el campo de batalla.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              


              
            </Carousel>

            {/*
          </div>
          <div className="row info-qin" style={{ marginTop: "2rem" }}>
            <p>
              La Dinastía Qin fue corta pero dejó un legado duradero en la
              historia de China. Aunque el gobierno de Qin Shi Huangdi fue
              autoritario y represivo en muchos aspectos, sentó las bases para
              la futura gobernanza imperial en China. Sus reformas
              administrativas, la unificación del país y los proyectos de
              construcción masivos sentaron las bases para la posterior Dinastía
              Han y el imperio chino.
            </p>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  style={{
                    width: "380px",
                    height: "580px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                  }}
                  frameBorder="0"
                  allowFullScreen={true}
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="https://sketchfab.com/models/04afa6c71d7244c58d7bb9fa8a939f27/embed"
                ></iframe>
              </div>
            </div>
            <div className="col">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  style={{
                    width: "380px",
                    height: "580px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                  }}
                  frameBorder="0"
                  allowFullScreen={true}
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="https://sketchfab.com/models/ded2697cd0a2413a95fa5a9b478bc99c/embed"
                ></iframe>
                <p
                  style={{
                    fontSize: "50px",
                    fontWeight: "normal",
                    fontFamily: "Noto Serif",
                    margin: "5px",
                    color: "black",
                  }}
                >
                  Soldados de Terracota
                </p>
              </div>
            </div>
            <div className="col">
              <div className="sketchfab-embed-wrapper">
                <iframe
                  style={{
                    width: "380px",
                    height: "580px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.8)",
                  }}
                  frameBorder="0"
                  allowFullScreen={true}
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="https://sketchfab.com/models/9746027fbe934fab9576930a037257c3/embed"
                ></iframe>
              </div>
            </div>*/}
          </div>
        </div>
        <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Aportes"
            imagen="/images/icono-contribuciones.png"
            identificador={123}
            href="/ver-contribuciones"
          />
        </div>
      </div>
    </>
  );
}



