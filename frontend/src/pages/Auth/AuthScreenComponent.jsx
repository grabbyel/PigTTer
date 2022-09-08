import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo_blanco_cerdo.png"
import "./AuthScreenComponent.css"
import LoginComponent from "./LoginComponent"
import RegisterComponent from "./RegisterComponent"



const AuthScreenComponent = ({ setUser }) => {


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
                {/* <Link to="/login">
                </Link> */}
                {/* <button className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 " variant="primary">
                        Iniciar Sesión

                    </button> */}
                <LoginComponent setUser={setUser} />
                {/* <button className="boton-auth btn btn-primary mt-5 rounded-5 fs-4 " variant="primary">
                    Registrarse
                </button> */}
                <RegisterComponent />
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
