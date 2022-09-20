import React from "react";
import piggtter from "../../assets/logo_borde.png";
import { Link } from "react-router-dom";
import InicioComponent from "../pure/InicioComponent";
import ExplorarComponent from "../pure/ExplorarComponent";
import MensajesComponents from "../pure/MensajesComponents";
import NotificacionesComponent from "../pure/NotificacionesComponent";
import PerfilComponent from "../pure/PerfilComponent";
import PigComponent from "./PigttearComponent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/logo_blanco_cerdo.png";
// PRUEBA COMMIT

const SidebarComponent = ({ user, setUser, tweets, setTweets }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-12 col-xl-12 px-sm-2 px-0 bg-light">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
            <span className="w-100 d-flex flex-column align-items-center justify-content-center text-dark">
              <h1>Pigtter</h1>
            </span>
            <div className="w-100 d-flex flex-column align-items-center justify-content-center text-dark mb-5">
              <img src={piggtter} alt="cerdo" width="120" />
            </div>
            <ul
              className="nav nav-pills w-100 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start my-3"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <i className="fs-1 bi-house-fill"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/explorar" className="nav-link px-0 align-middle">
                  <i className="fs-1 bi-hash"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Explorar
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/avisos" className="nav-link align-middle px-0">
                  <i className="fs-1 bi-bell-fill"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Avisos
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mensajes" className="nav-link px-0 align-middle">
                  <i className="fs-1 bi-envelope-fill"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Mensajes
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/comunidad" className="nav-link px-0 align-middle">
                  <i className="fs-1 bi-people-fill"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Comunidad
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/perfil" className="nav-link px-0 align-middle">
                  <i className="fs-1 bi-person-circle"></i>{" "}
                  <span
                    className="fs-4 ms-1 d-none d-sm-inline"
                    style={{ color: "black" }}
                  >
                    Perfil
                  </span>
                </Link>
              </li>

              <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                <PigComponent
                  user={user}
                  tweets={tweets}
                  setTweets={setTweets}
                />
                <Button
                  className="btn btn-primary w-75 mt-3 rounded-5"
                  variant="primary"
                  onClick={() => {
                    setUser(null);
                    window.localStorage.removeItem("loggedUser");
                  }}
                >
                  <span
                    className="fs-4 ms-1 d-none d-md-inline d-flex flex-column align-items-center justify-content-center"
                    style={{ color: "white" }}
                  >
                    Logout
                  </span>

                  <i
                    className="d-md-none bi bi-box-arrow-left fs-1"
                    style={{ color: "white" }}
                  ></i>
                </Button>
              </div>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
