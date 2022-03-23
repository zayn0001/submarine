import Login from "./Login"
import React, {useState} from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import useToken from './useToken';


export default function App() {
    const { token, setToken } = useToken();
    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <div className="wrapper">
       
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profileui" element={<Navigate to="/dashboard" replace />}/>
            </Routes>
          </BrowserRouter>
        </div>
      );

}