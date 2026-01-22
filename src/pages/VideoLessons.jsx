import React, { useState } from 'react';
import './VideoLessons.css';

// YouTube video URLs (embed links) for the relevant topics
const videoData = [
  {
    id: 1,
    title: "Learn React Basics",
    description: "Understanding the fundamentals of React",
    videoUrl: "https://www.youtube.com/embed/sBws8MSXN7A", // React Basics video URL
  },
 
  {
    id: 3,
    title: "Node.js for Beginners",
    description: "Introductory guide to Node.js",
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4", // Node.js for Beginners video URL
  },
  {
    id: 4,
    title: "Frontend Web Development",
    description: "Learn how to build websites using HTML, CSS, and JavaScript",
    videoUrl: "https://www.youtube.com/embed/pQN-pnP2K0o", // Frontend Web Development video URL (updated)
  },
];

function VideoLessons() {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="video-lessons">
      <h2>Video Lessons</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src={selectedVideo.videoUrl}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video-info">
          <h3>{selectedVideo.title}</h3>
          <p>{selectedVideo.description}</p>
        </div>
      </div>
      <div className="video-list">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="video-thumbnail"
            onClick={() => handleVideoSelect(video)}
          >
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoLessons;
