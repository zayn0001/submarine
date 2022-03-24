import Login from "./Login"
import React, {useState} from "react"


export default function App() {
    const [token, setToken] = useState()
    if (!token) {
        return <Login setToken={setToken}/>
    }

}