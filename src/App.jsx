import React from 'react';
import { useState, useEffect } from 'react';
import youtube from './youtube'; 
import SearchBar from './SearchBar'; 
import VideoList from './VideoList'; 
import VideoDetail from './VideoDetail'; 
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('buildings');
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className='app-container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='main-content'>
        <div className='video-detail'>
          <VideoDetail video={selectedVideo} />
        </div>
        <div className='video-list'>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
