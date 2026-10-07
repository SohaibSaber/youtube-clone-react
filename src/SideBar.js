import React from 'react'
import "./SideBar.css";
import SideBarRow from './SideBarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


export default function SideBar() {
  return (
    <div className='SideBar'>
        <SideBarRow selected Icon={HomeIcon} title="Home"/>
        <SideBarRow Icon={WhatshotIcon} title="Trending"/>
        <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <SideBarRow Icon={VideoLibraryIcon} title="Libray"/>
        <SideBarRow Icon={HistoryIcon} title="History"/>
        <SideBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
        <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
        <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
        <hr/>
    </div>
  )
}
