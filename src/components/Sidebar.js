import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiMusicNoteBold } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineNewspaper } from "react-icons/hi";
import { SlBulb } from "react-icons/sl";
import { BsTrophy } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  
  return (
    <div className="shadow-lg text-nowrap pr-5 fixed bg-white z-10 overflow-y-scroll h-full" style={{scrollbarWidth : 'thin'}}>
      <ul className="p-3">
       <Link to="/"><li className="flex py-2 cursor-pointerhover:bg-gray-100 rounded-md "><FaHome  className="mx-4 size-6" /> Home</li></Link>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><SiYoutubeshorts className="mx-4 size-6"/> Shorts</li> 
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><MdSubscriptions className="mx-4 size-6"/> Subscriptions</li> 
      </ul>
      <hr />
      <h1 className="p-3 mx-4 font-bold flex cursor-pointer">You <IoIosArrowForward className="mx-4 size-6"/></h1>
      <ul className="p-3">
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><BiSolidUserAccount className="mx-4 size-6"/> Your Channel</li> 
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><FaHistory className="mx-4 size-6"/> History</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><MdPlaylistPlay className="mx-4 size-6"/> Playlists</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><GoVideo className="mx-4 size-6"/> Your videos</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><IoMdTime className="mx-4 size-6"/> Watch Later</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><AiOutlineLike className="mx-4 size-6"/> Liked videos</li>
      </ul >
      <hr />
      <h1 className="p-3 mx-4 font-bold cursor-pointer">Subscriptions</h1>
      <ul className="p-3">
        <li className="flex py-2 mx-4 cursor-pointer hover:bg-gray-100 rounded-md">Tech by Vineet</li> 
        <li className="flex py-2 mx-4 cursor-pointer hover:bg-gray-100 rounded-md">The Lallantop</li>
        <li className="flex py-2 mx-4 cursor-pointer hover:bg-gray-100 rounded-md">SSC Adda247</li>
        <li className="flex py-2 mx-4 cursor-pointer hover:bg-gray-100 rounded-md">Khan GS  Research...</li>
        <li className="flex py-2 mx-4 cursor-pointer hover:bg-gray-100 rounded-md">Zee News Live</li>
      </ul>
      <hr />
      <h1 className="p-3 mx-4 font-bold cursor-pointer">Explore</h1>
      <ul className="p-3">
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><HiFire className="mx-4 size-6"/> Trending</li> 
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><LiaShoppingBagSolid className="mx-4 size-6"/> Shopping</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><PiMusicNoteBold className="mx-4 size-6"/> Music</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><PiFilmSlateLight className="mx-4 size-6"/> Film</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><HiOutlineSignal className="mx-4 size-6 cursor-pointer"/> Live</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><SiYoutubegaming className="mx-4 size-6"/> Gaming</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><HiOutlineNewspaper className="mx-4 size-6"/> News</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><SlBulb className="mx-4 size-6"/> Courses</li>
        <li className="flex py-2 cursor-pointer hover:bg-gray-100 rounded-md"><BsTrophy className="mx-4 size-6"/> Sport</li>
      </ul>
      <hr />
    </div>
  )
}

export default Sidebar;