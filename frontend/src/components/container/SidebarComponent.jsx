import React from 'react'
import piggtter from '../../assets/piggtter.png'
import { Link } from "react-router-dom"
import InicioComponent from '../pure/InicioComponent'
import ExplorarComponent from '../pure/ExplorarComponent'
import MensajesComponents from '../pure/MensajesComponents'
import NotificacionesComponent from '../pure/NotificacionesComponent'
import PerfilComponent from '../pure/PerfilComponent'
import PigComponent from './PigComponent'



const SidebarComponent = () => {
    return (
        //   <nav classNameName='bg-light'>
        //       <InicioComponent/>
        //       <ExplorarComponent/>
        //       <MensajesComponents/>
        //       <NotificacionesComponent />
        //       <PerfilComponent />
        // </nav>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-12 col-xl-12 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <img src={piggtter} width="100" />
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="/" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="fs-4 ms-1 d-none d-sm-inline">Inicio</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/explorar" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-hash"></i> <span className="fs-4 ms-1 d-none d-sm-inline">Explorar</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/avisos" className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-bell-fill"></i> <span className="fs-4 ms-1 d-none d-sm-inline">Avisos</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/mensajes" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-envelope-fill"></i> <span className="fs-4 ms-1 d-none d-sm-inline">Mensajes</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/perfil" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-person-circle"></i> <span className="fs-4 ms-1 d-none d-sm-inline">Perfil</span></Link>
                            </li>



                        </ul>
                        <PigComponent />
                        <hr />
                        {/* <hr /> */}
                        {/* <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                <span className="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarComponent