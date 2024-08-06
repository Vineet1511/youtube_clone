import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  useEffect(() =>{
    getVideos();
  },[]);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }
  return (
    <div id='videos' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 flex-wrap px-6 py-5'>
     { videos.map((video) => 
    <Link key={video?.id} to={"/watch?v=" + video.id}><VideoCards info={video}/></Link>
     )}
        
    </div>
  )
}

export default VideoContainer