// import SidebarComponent from "./components/container/SidebarComponent"
// import FeedComponent from "./components/container/FeedComponent"
import { useState, useEffect } from 'react'
import "./App.css"
import AuthScreenComponent from "./pages/Auth/AuthScreenComponent"
import PigtterComponent from './components/container/PigtterComponent'
import tweetService from './services/tweets'
import userService from './services/user'

function App() {

    const [user, setUser] = useState(null)
    const [tweets, setTweets] = useState([])
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser')
        if (loggedUser) {
            const user = JSON.parse(loggedUser)
            setUser(user)
        }
    }, [])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         tweetService.getTweets().then(tweets => {
    //             setTweets(tweets)
    //         })
    //     }, 300)
    //     return() => clearTimeout(timer)
    // }, [tweets])

    useEffect(() => {
        
            tweetService.getTweets().then(tweets => {
                setTweets(tweets)
            })
        
   
    }, [tweets])

    useEffect(() => {
        userService.getUsers().then(users => {
            setUsers(users)
        })
        
    }, [users]);
  

    return (
        <div>
            {user ? <PigtterComponent user={user} users={users} setUser={setUser} tweets={tweets} setTweets={setTweets} /> : <AuthScreenComponent user={user} setUser={setUser} />}
        </div>
    )
}

export default App
