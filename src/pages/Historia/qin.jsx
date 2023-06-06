import { Boton_back } from "../../components/boton-back";

export function Din_Qin() {

    return (
      <>
          <h1>Dinastia Qin</h1>

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
  