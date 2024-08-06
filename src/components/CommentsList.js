import React from 'react'
import Comments from './Comments'

const CommentsList = ({comments}) => {
  return (
    <>
      {
        comments.map((comment, index) =>{
            return (
                <>
                    <div className='pl-8' key={index}>
                        <Comments data={comment}/>

                        <div key={index}>
                            <CommentsList key={index} comments={comment.reply}/>
                        </div>
                    </div>
                </>
            )
        })
      }  
    </>
  )
   
}

export default CommentsList