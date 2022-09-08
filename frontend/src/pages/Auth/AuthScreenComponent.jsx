import React from "react"
import logo from "../../assets/logo_blanco_cerdo.png"
import "./AuthScreenComponent.css"

const AuthScreenComponent = () => {
    return (
        <div className="background">
            {/* <div>
                <h1>PIGTTER</h1>
            </div> */}
            <div className="divLogo">
                <img src={logo}
                    alt="logo" />
            </div>

            <div className="divBotones">
                <button className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 " variant="primary">
                    Iniciar Sesión
                    {/* <Link to="/LoginComponent"> */}
                </button>
                <button className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 " variant="primary">
                    Registrarse
                </button>
            </div>
            <div className="titulo">
                <span className='fila1'>
                    OPINA.
                </span>
                <span className='fila2'>
                    COMENTA.
                </span>
                <span className='fila3'>
                    PIGTTEA.
                </span>
            </div>
        </div>

        //gola
    )
}

export default AuthScreenComponent
