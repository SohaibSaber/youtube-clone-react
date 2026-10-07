import Avatar from "@mui/material/Avatar";
import React from "react";
import "./VideoCard.css";

export default function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="VideoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="video_info">
        <Avatar className="VideoCard_avatar" 
        alt={channel} src={channelImage} />
      <div className="video_text">
        <h4> {title} </h4>
        <p>{channel}</p>
        <p> {views} • {timestamp} </p>
      </div>
      
      </div>
    </div>
  );
}
