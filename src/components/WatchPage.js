import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { YOUTUBE_VIDEO_BYID } from '../utils/constants'
import { FaUserTie } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

const WatchPage = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParams.get("v")
  const [videoInfo, setVideoInfo] = useState([])

  useEffect(() =>{
    const getVideoInfo = async () =>{
      const data = await fetch(videoDetails)
      const json = await data.json()
      setVideoInfo(json?.items)

      console.log(videoInfo);
      
    }

    getVideoInfo()
  },[])  
  

  useEffect(() =>{
    dispatch(closeMenu())
  })

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols px-32 py-5'>
        <iframe 
          className='rounded-2xl grid-cols-5 w-[100%] h-[65vh]'
          src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>

        {videoInfo.map((video) => {
          return(
            <>
              <div className='py-2' key={video.id}>
                <div>
                  <h1 className='font-bold text-xl pb-2'>{video?.snippet?.title}</h1>
                </div>

                <div className='flex h-14 '>
                  <div className='flex items-center'>
                  <FaUserTie className='text-3xl border border-gray-400 rounded-full'/>
                  </div>
                  
                  <ul className='px-4'>
                    <li className='font-semibold text-lg'>
                      {video?.snippet?.channelTitle}
                    </li>
                    <li className='text-sm opacity-70'>
                      2M Subscriber 
                    </li>
                  </ul>

                  <p className='flex items-center m-2 font-semibold'>
                    <button className='h-9 px-4 rounded-full font-semibold bg-black text-white mr-[14%]'>Subscribe</button>

                    <button className='flex items-center text-md h-9 bg-gray-200 rounded-full px-4 mx-2'><AiTwotoneLike className='mr-3'size="20"/> {" "} {video?.statistics?.likeCount} <RxDividerVertical className='ml-1 mr-1' size="20"/> <AiTwotoneDislike className='ml-1 mr-1' size="20"/></button>

                    <button className='flex items-center text-md h-9 bg-gray-200 rounded-full px-4 mx-2'>
                      <RiShareForwardLine className='mr-3 size="20"'/> Share
                    </button>

                    <button className='flex items-center text-md h-9 bg-gray-200 rounded-full px-4 mx-2'>
                      <MdOutlineFileDownload className='mr-3' size="20"/> Download
                    </button>

                    <button className='flex items-center text-md h-9 bg-gray-200 rounded-full px-4 mx-2'><BsThreeDots size="20"/></button>
                  </p>
                </div>
                </div>
            </>
          )
        })
          
        }
      </div>

      <CommentsContainer />
    </div>
  )
}

export default WatchPage