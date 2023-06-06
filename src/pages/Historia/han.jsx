import { Boton_back } from "../../components/boton-back";

export function Din_Han() {

    return (
      <>
          <h1>Dinastia Han</h1>

          <div
          className="next-back"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Boton_back
            nombre="Dinastias"
            imagen="/images/dinastia-icono.png"
            identificador={123}
            href="/dinastias"
          />
        </div>
      </>
    );
  }
  