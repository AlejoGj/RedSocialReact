import React from 'react'
import Bug from '../components/Bug'
import Footer from '../components/Footer'
import FriendRequest from '../components/FriendRequest' 
import Interests from '../components/Interests'
import MakeAPost from '../components/MakeAPost'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Posts from '../components/Posts'
import Profile from '../components/Profile'
import UpcomingEvents from '../components/UpcomingEvents'
import Accordion from '../components/Accordion'
import Ads from '../components/Ads'
import AlertBox from '../components/AlertBox'

export default function HomePage({user,onLogout}) {
  return (
    <>
        <Navbar user={user} onLogout={onLogout}/>
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
