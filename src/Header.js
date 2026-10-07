import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import youtube from "./assets/youTube.svg";
import SearchICon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppIcon from "@mui/icons-material/Apps";
import NotificationIcon from "@mui/icons-material/Notifications";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img className="header_logo" src={youtube} alt="img" />
      </div>
      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchICon className="header_inputButton"/>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppIcon className="header_icon" />
        <NotificationIcon className="header_icon"/>
      </div>
    </div>
  );
}
