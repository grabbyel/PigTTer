// import SidebarComponent from "./components/container/SidebarComponent"
// import FeedComponent from "./components/container/FeedComponent"
import { useState, useEffect } from 'react'
import "./App.css"
import AuthScreenComponent from "./pages/Auth/AuthScreenComponent"
import { Link, Routes, Route } from "react-router-dom"
import LoginComponent from "./pages/Auth/LoginComponent"
import PigtterComponent from './components/container/PigtterComponent'

function App() {


    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setUser(user)
        }
    }, [])

    return (
        <div>
            {user ? <PigtterComponent setUser={setUser} /> : <AuthScreenComponent user={user} setUser={setUser} />}
        </div>
    )
}

export default App
