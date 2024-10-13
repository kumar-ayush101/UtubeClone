import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import youtube from  "./youtube";

const VideoDetail=({video})=>{
    const[channelInfo, setChannelInfo]=useState(null);

    useEffect(() =>{
      if(video){
        fetchChannelDetails(video.snippet.channelId);
      }
    },[video])

    const fetchChannelDetails=async(channelId)=>{
         const response = await youtube.get('/channels', {
          params:{
            part:'snippet',
            id:channelId,
          }
         });
         setChannelInfo(response.data.items[0].snippet)
    }
    if(!video){
      return <div>Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    const{title,description,channelTitle}=video.snippet;
    return(
      <div>
        <div className="ui embed">
          <iframe src={videoSrc}  title='video player'></iframe>
        </div>
        <div className="ui segment">
           <h4 className="ui header">{title}</h4>
           <p>{description}</p>
           {channelInfo && (
            <div className="channel-info">
              <img src={channelInfo.thumbnails.default.url} alt={channelTitle} className="channel-logo" />
              <p>{channelTitle}</p>
            </div>
           )}
        </div>
      </div>
    )
}

export default VideoDetail