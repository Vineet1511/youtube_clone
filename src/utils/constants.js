const GOOGLE_API_KEY = "AIzaSyB421Ii3Iu0EUuxHG-q1tkXExRpOn_Cq-I";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";