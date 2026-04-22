import ChatPage from "./Pages/ChatPage"
import ConfigurationPage from "./Pages/ConfigurationPage"
import GroupsPage from "./Pages/GroupsPage"
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePage"
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage"
import { Route, Routes, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";

export default function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') == "true");
  let [userName, setUserName] = useState(localStorage.getItem('userName') || '' );

   // console.log("usuario logueado: "+isAuthenticated);

  useEffect(()=> {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  },[isAuthenticated, userName]);



  let handleLogin = (userName) => {
    setIsAuthenticated(true); // token de autorizacion
    setUserName(userName);

  };

  let handlerLogout = () => {
    setIsAuthenticated(false); // token de autorizacion
    setUserName('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  }

  return (
    <>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Navigate to="/Home" /> : <LoginPage onLogin={handleLogin}/> } />
        <Route path="/Home" element={ isAuthenticated ? <HomePage user={userName} onLogout={handlerLogout}/> : <Navigate to="/" />} />
        <Route path="/Register" element={ isAuthenticated ? <Navigate to="/Home" /> : <RegisterPage />}/>
        <Route path="/Profile" element={isAuthenticated ? <ProfilePage/> : <Navigate to="/" /> } />
        <Route path="/Chat" element={isAuthenticated ? <ChatPage/> : <Navigate to="/" />}/>
        <Route path="/Configuration" element={isAuthenticated ? <ConfigurationPage/> : <Navigate to="/" /> } />
        <Route path="/Groups" element={ isAuthenticated ? <GroupsPage/> : <Navigate to="/" /> }/>
        <Route path="*" element={<LoginPage onLogin={handleLogin}/>}/>
      </Routes>
    </>
  )
  
}

