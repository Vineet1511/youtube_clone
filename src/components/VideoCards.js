import React from 'react';

const VideoCards = ({info}) => {
    // console.log(info);

    if (!info) {
        return null;
    }
    
    const { snippet, statistics } = info;
    if (!snippet || !statistics) {
        return null;
    }
    
    const { channelTitle, title, thumbnails } = snippet;

    const thumbnailUrl = thumbnails?.high?.url;

    const truncateTitle = (str, num) => {
        if (str.length <= num) {
          return str;
        }
        return str.slice(0, num) + '...';
      };

      const formatViewCount = (viewCount) => {
        if (viewCount >= 1000000) {
          return (viewCount / 1000000).toFixed(1) + 'M views';
        } else if (viewCount >= 1000) {
          return (viewCount / 1000).toFixed(1) + 'K views';
        } else {
          return viewCount.toString();
        }
      };

  return (
    <div className='grid-cols-3 mx-3 pb-8 cursor-pointer'>
        <img className='rounded-2xl h-[120vh] md:h-56 w-full object-cover' src={thumbnailUrl} alt="thumbnail" />

            <ul className='flex pt-3'>
              <div className='pr-3'>
                  <img className='rounded-full md:h-10 md:w-16 h-28 w-28' src={thumbnailUrl} alt="thumbnail" />
              </div>

              <div className=''>
                  <li className='font-semibold text-5xl md:text-base'>{truncateTitle(title, 60)}</li>
                  <li className='opacity-65 text-3xl md:text-base'>{channelTitle}</li>
                  <li className='opacity-65'>{formatViewCount(statistics.viewCount)}</li>
              </div>
                  
            </ul>
        </div>
  )
}

export default VideoCards;