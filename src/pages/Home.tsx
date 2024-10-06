import React from 'react';
import { Play } from 'lucide-react';

const featuredPlaylists = [
  { id: 1, title: 'Daily Motivation', imageUrl: 'https://source.unsplash.com/random/300x300?motivation' },
  { id: 2, title: 'Success Mindset', imageUrl: 'https://source.unsplash.com/random/300x300?success' },
  { id: 3, title: 'Overcoming Challenges', imageUrl: 'https://source.unsplash.com/random/300x300?challenge' },
  { id: 4, title: 'Positive Affirmations', imageUrl: 'https://source.unsplash.com/random/300x300?positive' },
];

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Good morning</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {featuredPlaylists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg overflow-hidden group relative">
            <img src={playlist.imageUrl} alt={playlist.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-green-500 text-white rounded-full p-3">
                <Play size={24} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{playlist.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* Add more sections for recently played, recommended speakers, etc. */}
    </div>
  );
};

export default Home;