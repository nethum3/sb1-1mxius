import React, { useContext } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { AudioContext } from '../contexts/AudioContext';

const Player = () => {
  const { currentTrack, isPlaying, togglePlay, nextTrack, previousTrack } = useContext(AudioContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={currentTrack?.imageUrl} alt={currentTrack?.title} className="w-14 h-14 rounded" />
          <div>
            <h3 className="font-semibold">{currentTrack?.title}</h3>
            <p className="text-sm text-gray-400">{currentTrack?.speaker}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white" onClick={previousTrack}>
            <SkipBack size={24} />
          </button>
          <button className="bg-white text-black rounded-full p-2" onClick={togglePlay}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="text-gray-400 hover:text-white" onClick={nextTrack}>
            <SkipForward size={24} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat size={20} />
          </button>
        </div>
        <div className="w-1/4">
          {/* Add volume control here */}
        </div>
      </div>
    </div>
  );
};

export default Player;