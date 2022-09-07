import HeaderComponent from "./components/container/HeaderComponent"
import SidebarComponent from "./components/container/SidebarComponent"
import "./App.css"
import FeedComponent from "./components/container/FeedComponent"
// import { Routes, Route, Link } from "react-router-dom"
// import InicioComponent from "./components/pure/InicioComponent"
// import ExplorarComponent from "./components/pure/ExplorarComponent"
// import MensajesComponents from "./components/pure/MensajesComponents"
// import NotificacionesComponent from "./components/pure/NotificacionesComponent"
// import PerfilComponent from "./components/pure/PerfilComponent"
// import PigComponent from "./components/container/PigComponent"


function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-5 col-4">
                    <SidebarComponent />
                </div>
                <div className="col-md-8 col-sm-7 col-8">
                    <FeedComponent />
                </div>
            </div>
        </div>
    )
}

export default App
