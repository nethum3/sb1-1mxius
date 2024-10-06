import React, { createContext, useState, useEffect } from 'react';

interface Track {
  id: number;
  title: string;
  speaker: string;
  audioUrl: string;
  imageUrl: string;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  togglePlay: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

export const AudioContext = createContext<AudioContextType>({
  currentTrack: null,
  isPlaying: false,
  togglePlay: () => {},
  nextTrack: () => {},
  previousTrack: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch initial track data from Supabase
    // For now, we'll use a mock track
    setCurrentTrack({
      id: 1,
      title: 'Believe in Yourself',
      speaker: 'John Doe',
      audioUrl: 'https://example.com/audio.mp3',
      imageUrl: 'https://source.unsplash.com/random/300x300?speaker',
    });
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // Implement next track logic
    console.log('Next track');
  };

  const previousTrack = () => {
    // Implement previous track logic
    console.log('Previous track');
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, togglePlay, nextTrack, previousTrack }}>
      {children}
    </AudioContext.Provider>
  );
};