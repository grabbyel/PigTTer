import React from "react";
import logo from "../../assets/logo_blanco_cerdo.png"

const AuthScreenComponent = () => {
    return (
        <div className="background">
            <div>
                <h1>PIGTTER</h1>
            </div>
            <div>
                <img src={logo}
                    alt="logo"/>
            </div>

            <div className="divBotones">
                <button className="btn btn-primary  mt-5 rounded-5 fs-4" variant="primary">
                    Iniciar Sesión
                </button>
                <button className="btn btn-primary  mt-5 rounded-5 fs-4" variant="primary">
                    Registrarse
                </button>
            </div>
            {/* <div className="titulo">
                <span style={{--start-color: #007cf0; --end-color: #00dfd8; --content: '¿Listo...'}}>
                    LISTO...
                </span>
                <span style="--start-color: #7928ca; --end-color: #ff0080; --content: 'Preview.'; --animation: a2">
                    PARA...
                </span>
                <span style="--start-color: #ff4d4d; animation-name: a3; --end-color: #f9cb28; --content: 'Ship.'; --animation: a3">
                    PIGTEAR ?
                </span>
            </div> */}
        </div>

//gola
    );
};

export default AuthScreenComponent;
