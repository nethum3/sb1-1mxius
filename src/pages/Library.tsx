import React from 'react';
import { Clock, Play } from 'lucide-react';

const playlists = [
  { id: 1, title: 'My Favorite Motivations', tracks: 15, duration: '1h 23m' },
  { id: 2, title: 'Morning Boost', tracks: 8, duration: '45m' },
  { id: 3, title: 'Overcoming Obstacles', tracks: 12, duration: '1h 5m' },
];

const Library = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Library</h1>
      <div className="space-y-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between group hover:bg-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-600 rounded-md flex items-center justify-center group-hover:bg-gray-500">
                <Play size={24} className="text-white opacity-0 group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-semibold">{playlist.title}</h3>
                <p className="text-sm text-gray-400">{playlist.tracks} tracks</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock size={16} />
              <span>{playlist.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;