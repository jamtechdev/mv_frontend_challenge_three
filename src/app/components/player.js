import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedVideo } from '../reducer';
import { youtubeUrlParser } from '../_helpers/helper';
const Player = () => {
  const videoLink = useSelector(getSelectedVideo);
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${youtubeUrlParser(videoLink)}?rel=0&amp;autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Player;
getSelectedVideo;
