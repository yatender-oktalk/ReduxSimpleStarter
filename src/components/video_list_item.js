import React from 'react'

// es6 syntax to fetch video from the props kind of pattern matching
// in functional programming
const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video;
    const imgUrl = video.snippet.thumbnails.default.url;

    return <li onClick={() => onVideoSelect(video)} className="list-group-item">

        <div className="video-list-media">
            <div className="media-left">
                <img className="media-object" src={imgUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
};

export default VideoListItem;