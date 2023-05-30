import React, { useState, useRef } from 'react';
import '../styles/Video.css';

const VideoComponent = (props) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playImg = 'https://img.freepik.com/premium-vector/play-button-icon-symbol-transparent-background-video-audio-player-vector-illustration_350225-118.jpg'



  const handlePlayPause = () => {
    const video = videoRef.current;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

 
const divStyle = {
    borderRadius: '20px'
}
const iconStyle = {
    background: '#727272',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    fontSize: '30px',
    cursor: 'pointer'
}

// const videoOverlay ={
//     position: 'absolute',
//     right: '14rem',
//     bottom: '0',
//     top: '20rem',
//     '@media all and (max-width: 500px)': {
//         right: '15rem',
//         top: '62rem',
//       },
// }

  return (
    <div className="video-container" style={divStyle}>
      <video ref={videoRef} className="background-video" loop >
        <source src={props.videoURL} type="video/mp4"  />
        {/* Add additional source tags for different video formats */}
      </video>
      <div className="video-overlay" >
     
        <div style={iconStyle} onClick={handlePlayPause}>
        {isPlaying ? (
            <div><i class="bi bi-pause"></i></div>
        ) : (
            <div><i class="bi bi-play"></i></div>  
        )}

        </div>
      
      </div>
    </div>
  );
};

export default VideoComponent;
