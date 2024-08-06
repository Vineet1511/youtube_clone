import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { BiVideoPlus } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { CiSearch } from "react-icons/ci";
import { json } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search)

    useEffect(() =>{
       const timer = setTimeout(() => getSearchSuggestions(), 200);

       if(searchCache[searchQuery]){
        setShowSuggestions(searchCache[searchQuery])
       }else{
        getSearchSuggestions()
       }

       return () => {
        clearTimeout(timer);
       }

    },[searchQuery])

    const getSearchSuggestions = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1])

        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
  return (
    <div className='flex justify-between p-5 shadow-sm w-[100vw]'>
        <div className='flex w-full'>
            <RxHamburgerMenu className='size-7 cursor-pointer' onClick={() => toggleMenuHandler()}/>

            <img 
                className='h-8 ml-4 cursor-pointer'
                src="https://www.gstatic.com/youtube/img/promos/growth/53723e837c902a1ea814db4f77832f38a6bb3e101fb5933c4f85636a218bb70b_382x62.png" alt="logo" 
            />
        </div>
        
        <div className='w-[50%] flex'>
        <input 
            type="text" 
            className='w-full border border-gray-400 rounded-l-full py-1 px-5'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
        />

        <button 
            className='border border-gray-400 rounded-r-full px-5 py-1 bg-gray-100'
        >🔍
        </button>
        </div>
        
        {showSuggestions && (
            <div className='absolute mt-9 mr-20 py-3 w-5/12 bg-white border border-gray-200 shadow-lg rounded-2xl'>
            <ul className=''>
                {suggestions.map((sg) => (
                    <li key={sg} className='px-5 py-1 flex items-center font-semibold  cursor-pointer hover:bg-gray-100'><CiSearch  className='mr-3'/> {sg}</li>

                ))}
            </ul>
        </div>)}
        <div className='flex gap-5'>

            <BiVideoPlus className='h-8 size-7'/>

            <MdOutlineNotificationsActive className='h-8 size-7'/>

            <img 
                className='h-8'
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                alt="user_icon" 
            />

        </div>

    </div>
    
  )
}

export default Head