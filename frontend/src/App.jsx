// import SidebarComponent from "./components/container/SidebarComponent"
// import FeedComponent from "./components/container/FeedComponent"
import { useState, useEffect } from 'react'
import "./App.css"
import AuthScreenComponent from "./pages/Auth/AuthScreenComponent"
import PigtterComponent from './components/container/PigtterComponent'
import tweetService from './services/tweets'


function App() {


    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setUser(user)
        }
    }, [])

    useEffect(() => {
        tweetService.getTweets().then(tweets => {
            setTweets(tweets)
            console.log(tweets)
        })
    }, [])

    return (
        <div>
            {user ? <PigtterComponent user={user} setUser={setUser} tweets={tweets} setTweets={setTweets} /> : <AuthScreenComponent user={user} setUser={setUser} />}
        </div>
    )
}

export default App
