// import SidebarComponent from "./components/container/SidebarComponent"
// import FeedComponent from "./components/container/FeedComponent"
import { useState } from 'react'
import "./App.css"
import AuthScreenComponent from "./pages/Auth/AuthScreenComponent"
import { Link, Routes, Route } from "react-router-dom"
import LoginComponent from "./pages/Auth/LoginComponent"

function App() {

    const [user, setUser] = useState(null)

    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4 col-sm-5 col-4">
        //             <SidebarComponent />
        //         </div>
        //         <div className="col-md-8 col-sm-7 col-8">
        //             <FeedComponent setUser={setUser} />
        //             {user && <h2>{user.username}</h2>}
        //         </div>
        //     </div>
        // </div>
        <div>
            <AuthScreenComponent setUser={setUser} />
        </div>
    )
}

export default App
