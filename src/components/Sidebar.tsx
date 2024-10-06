import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, PlusCircle, Heart } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-black p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient bg-clip-text text-transparent">MotivateMe</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <Home size={24} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <Search size={24} />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/library" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <Library size={24} />
              <span>Your Library</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <button className="flex items-center space-x-3 text-gray-300 hover:text-white">
          <PlusCircle size={24} />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center space-x-3 text-gray-300 hover:text-white mt-4">
          <Heart size={24} />
          <span>Liked Speeches</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;