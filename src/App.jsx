import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Accordion from "./components/Accordion"
import Interests from "./components/Interests"
import AlertBox from "./components/AlertBox"
import MakeAPost from "./components/MakeAPost"
import Posts from "./components/Posts"
import UpcomingEvents from "./components/UpcomingEvents"
import FriendRequest from "./components/FriendRequest"
import Ads from "./components/Ads"
import Bug from "./components/Bug"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar/>
      <div className="w3-container w3-content" style={{maxWidth:"1400px", marginTop:"80px"}}>
        <div className="w3-row">
          <div className="w3-col m3">
            <Profile/>
            <br/>
            <Accordion/>
            <br/>
            <Interests/>
            <br/>
            <AlertBox/>
          </div>
          <div className="w3-col m7">
            <MakeAPost/>
            <Posts/>
          </div>
          <div className="w3-col m2">
            <UpcomingEvents/>
            <br/>
            <FriendRequest/>
            <br/>
            <Ads/>
            <br/>
            <Bug/>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </>
  )
  
}

