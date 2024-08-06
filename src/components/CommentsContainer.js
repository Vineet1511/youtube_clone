import React from 'react'
import { MdSort } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import CommentsList from './CommentsList';


const CommentsContainer = () => {

    const commentsData = [
        {
            name:"@RaghavDubey8677",
            text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
            reply:[
              {
                name: "Vineet Sonkar",
                text: "After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation and the feeling that  instead of a teacher a friend is teaching,makes the videos more and more interesting.thanks a lot for sharing your precious knowledge with us and that too for free of cost.",
                reply: [],
              },
            ]
            
          },
          {
            name:"@RaghavDubey7857",
            text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, 🚀🚀🚀♥Amazing content",
            reply:[
              {
                name: "Vineet Sonkar",
                text: "hh my God Man!! 🔥 Heavy stuffs. I literally had goosebumps when you showed practical example of 📚 Thank you so much for these awesome contents. 🙏🏼",
                reply: [],
              },
              {
                name: "Vineet Sonkar",
                text: "namaste rract project very⭐🔴🚀♥ good",
                reply: [],
              },
            ]
          },
          {
            name:"@khushalmishra1288",
            text:"You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
            reply:  [
              {
                name: "Vineet Sonkar",
                text: "कोणी कोणी शेवट पर्यंत व्हिडिओ बघितला? Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
                reply: [],
              },
              {
                name: "Vineet Sonkar",
                text: "You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
                reply: [],
              },
            ]
          },
          {
            name:"@KhushalMishra",
            text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
            reply: [
              {
                name: "Vineet Sonkar",
                text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
                reply: [],
              },
              {
                name: "Madhvi Dubey",
                text: "Pooja tu kharach all rounder aahes.Tuja recipe khup chan astat.👌👌❤️",
                reply: [],
              },
              {
                name: "Raghav Dubey",
                text: "namaste react project very good",
                reply: [],
              },
            ],
          },
          {
            name:"@spillthebuzz",
            text:"Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ...❤❤❤ Feeling like someone is singing for me and literally a different vibe comes ❤❤❤    ",
            reply:[
              {
                name: "Raghav Dubey",
                text: "Your voice is totally heart touching ❤😊",
                reply: [],
              },
            ]
            
          },
          {
            name:"@DebojyotiMandal",
            text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
            reply:[
              {
                name: "Janhvi Dubey",
                text: "namaste react project very good",
                reply: [],
              },
              {
                name: "Raghav Dubey",
                text: "Aaaaahhhhhhhh kya voice hai. Yaar 🔥🔥🔥...,...❤️❤️❤️so sweet", 
                reply: [],
              },
            ]
          },
          {
            name:"@RaghavDubey",
            text:"Magical voice 💫💫💫❣️",
            reply:  [
              {
                name: "Vineet Sonkar",
                text: "namaste rract project very good",
                reply: [],
              },
              {
                name: "Vineet Sonkar",
                text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
                reply: [],
              },
            ]
          },
          {
            name:"@RaghavDubey",
            text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
            reply: [
              {
                name: "Vineet Sonkar",
                text: "What a magical Superb voice… I m Artist when I m working alwz listen ur songs … it’s gave me energy to do my work ✍",
                reply: [],
              },
              {
                name: "Vineet Sonkar",
                text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
                reply: [],
              },
              {
                name: "Raghav Dubey",
                text: "namaste react project very good",
                reply: [],
              },
            ],
          }
    ]
    

  return (
    <div className='px-32'>
        <div className='flex items-center w-full'>
            <h1 className='font-bold text-xl'>Comments</h1>

            <MdSort className='text-2xl ml-24 mr-2'/>
            <span className='font-semibold'>Sort By</span>
        </div>

        <div className='flex items-center w-full'>
            <div className='flex items-center'>
            <FaUserTie className='text-4xl text-pink-500 my-5 border border-gray-400 rounded-full'/>

            <div className='flex flex-col'>
                <input type="text" className=' focus:outline-none mx-5' placeholder='Add a Comment...' />
                <hr className='mx-5 my-1 border-black
             w-[50vw]'/>
            </div>
            </div>
        </div>

        <div>
            <CommentsList comments={commentsData}/>
        </div>
    </div>
  )
}

export default CommentsContainer