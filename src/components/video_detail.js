import React from 'react';
const VideoDetail = ({video}) => {
    // console.log(video.snippet);
    if(!video) {
        return <div>Loading...</div>
    }
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(url);
    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
        // (video.snippet) ? 
        // <div>
        //     <p>{video.snippet.title}</p>
        //     <p>{video.snippet.description}</p>
        // </div>
        // : null
    );
}
export default VideoDetail;