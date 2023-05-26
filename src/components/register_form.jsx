import { useForm } from "react-hook-form";
import { createuser } from "../api/register_api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../scss/registro_style.css";

export function Register_form() {
  const { register, watch } = useForm();
  const navigate = useNavigate();
  const [email1, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [selectedImage, setSelectedImage] = useState(""); // Agregado

  const [showModal, setShowModal] = useState(false);

  const handleUsernameChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    const foto= sessionStorage.getItem("foto")
    createuser(foto, email1, nombre, contraseña);
    navigate("/login");
    sessionStorage.removeItem("foto");
  }; 

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const [showModal2, setShowModal2] = useState(false);

  const handleModalOpen2 = () => {
    setShowModal2(true);
  };

  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  // Obtener los campos observados para la validación
  const username = watch("username");
  const email = watch("email");
  const password = watch("password");

  // Verificar si todos los campos requeridos están completos
  const isFormComplete = !!username && !!email && !!password;

  const imagen=  "/images/perfil/imagen.png"
  const imagen2= "/images/perfil/imagen1.png"
  const imagen3= "/images/perfil/imagen2.png"
  const imagen4= "/images/perfil/imagen3.png"
  const imagen5= "/images/perfil/imagen4.png"
  const imagen6= "/images/perfil/imagen5.avif"
  const imagen7= "/images/perfil/imagen6.avif"
  const imagen8= "/images/perfil/imagen7.png"
  const imagen9= "/images/perfil/imagen8.png"
  const imagen10= "/images/perfil/imagen9.png"
  const imagen11= "/images/perfil/imagen10.png"
  const imagen12= "/images/perfil/imagen11.png"
  const imagen13= "/images/perfil/imagen12.png"
  const imagen14= "/images/perfil/imagen13.png"
  const imagen15= "/images/perfil/imagen14.png"
  const imagen16= "/images/perfil/imagen15.png"

  const handleImage = (imageUrl) => {
    setSelectedImage(imageUrl);

  };

  const handleSubmit2 = () => {
    // AquÃ­ puedes realizar acciones con la URL de la imagen seleccionada
    console.log("URL de la imagen seleccionada:", selectedImage);
    sessionStorage.setItem("foto", selectedImage )
  };

  const redireccionarLogin= () => {
    navigate('/login'); // Redireccionar a la página de registro
  };

  const redireccionarInicio= () => {
    navigate('/'); // Redireccionar a la página de registro
  };

  return (
    <div className="padre-registro text-center">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center fw-bold mb-0">Finding China</h1>
            <h2 className="text-center fw-bold mb-0">寻找中国</h2>
            <div className="card my-5 text-center">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <img
                    src= "/images/login_logo.jpg"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div>
                  <button type="button" onClick={handleModalOpen2}>
                    Escoge tu avatar
                  </button>
                </div>

                <div className="mb-3">
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={handleUsernameChange}
                    id="username"
                    placeholder="Ingresa username"
                    /* {...register("username", { required: true })} */
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    className="form-control"
                    value={email1}
                    onChange={handleEmailChange}
                    id="email"
                    placeholder="Ingresa Email"
                    /* {...register("email", { required: true })} */
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    className="form-control"
                    value={contraseña}
                    onChange={handlePasswordChange}
                    id="password"
                    placeholder="Ingresa contraseña"
                    /* {...register("password", { required: true })} */
                  />
                </div>
                <div>
                  <Button
                    type="button"
                    className="btn btn-danger form-control mt-2"
                    onClick={handleModalOpen}
                    /* disabled={!isFormComplete} */
                  >
                    Enviar
                  </Button>

                  <Modal show={showModal} onHide={handleModalClose} centered backdrop="static">
                    <Modal.Header>
                      <Modal.Title>Registro existoso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¡Bienvenid@! Te has registrado con exito</Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant="secondary" onClick={() => { handleModalClose(); handleSubmit(); }}>
                        Guardar
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal show={showModal2} onHide={handleModalClose2} centered backdrop="static">
                    <Modal.Header>
                      <Modal.Title>Escoge tu foto de perfil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="image-container">

                      <img src={imagen} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen)}/>
                      <img src={imagen2} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px',  marginBottom:'20px'}} onClick={() => handleImage(imagen2)}/>
                      <img src={imagen3} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',  marginRight:'20px',  marginBottom:'20px'}} onClick={() => handleImage(imagen3)}/>
                      <img src={imagen4} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen4)}/>
                      <img src={imagen5} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen5)}/>
                      <img src={imagen6} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen6)}/>
                      <img src={imagen7} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen7)}/>
                      <img src={imagen8} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen8)} />
                      <img src={imagen9} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px' }} onClick={() => handleImage(imagen9)} />
                      <img src={imagen10} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen10)}/>
                      <img src={imagen11} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen11)} />
                      <img src={imagen12} alt="Imagen" className="square-image" style={{width:'100px', height:'100px', marginBottom:'20px'}} onClick={() => handleImage(imagen12)}/>
                      <img src={imagen13} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen13)} />
                      <img src={imagen14} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen14)}/>
                      <img src={imagen15} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginRight:'20px', marginBottom:'20px'}} onClick={() => handleImage(imagen15)}/>
                      <img src={imagen16} alt="Imagen" className="square-image" style={{width:'100px', height:'100px',marginBottom:'20px'}} onClick={() => handleImage(imagen16)}/>
                   </div>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button type="submit" variant="secondary"  onClick={() => { handleModalClose2(); handleSubmit2(); }} >
                        Enviar
                      </Button>

                      <Button type="submit" variant="secondary" onClick={ handleModalClose2}>
                        cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </div>
                <div className="form-text text-dark">
                  Ya tienes cuenta?
                  <a className="registrarse" onClick={redireccionarLogin}> {/* navigate */}
                    
                    Inicia sesión
                  </a>
                </div>
                <div className="form-text text-dark">
                  Vuelta al menú?
                  <a
                    className="registrarse"
                    onClick={redireccionarInicio}
                  > {/* navigate */}
                    Click aquí
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*     <form  >
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>

    </form> */
  );
}
