import React from 'react';

const VideoListItem = ({video, onItemClicked}) => {
    return (
        <li className='list-group-item video-item' onClick={ () => onItemClicked(video) }>
            <div className='media'>
                <div className='media-left'>
                    <img className='media-object' src={ video.snippet.thumbnails.default.url} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;