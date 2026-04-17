import ChatPage from "./Pages/ChatPage"
import ConfigurationPage from "./Pages/ConfigurationPage"
import GroupsPage from "./Pages/GroupsPage"
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePage"
import RegisterPage from "./Pages/RegisterPage"
import HomePage from "./Pages/HomePage"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/Home" element={<HomePage/>}></Route>
        <Route path="/Register" element={<RegisterPage/>}></Route>
        <Route path="/Profile" element={<ProfilePage/>}></Route>
        <Route path="/Chat" element={<ChatPage/>}></Route>
        <Route path="/Configuration" element={<ConfigurationPage/>}></Route>
        <Route path="/Groups" element={<GroupsPage/>}></Route>
      </Routes>
    </>
  )
  
}

