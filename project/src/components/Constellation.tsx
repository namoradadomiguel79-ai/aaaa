import React, { useState } from 'react';
import { Star } from './Star';
import { Modal } from './Modal';
import { BeatrizModal } from './BeatrizModal';
import { friends, Friend } from '../data/friends';

export const Constellation: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleStarClick = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  const closeModal = () => {
    setSelectedFriend(null);
  };

  // Create constellation lines
  const createConstellationLines = () => {
    const lines = [];
    for (let i = 0; i < friends.length - 1; i++) {
      for (let j = i + 1; j < friends.length; j++) {
        const friend1 = friends[i];
        const friend2 = friends[j];
        const distance = Math.sqrt(
          Math.pow(friend1.x - friend2.x, 2) + Math.pow(friend1.y - friend2.y, 2)
        );
        
        // Only connect nearby stars
        if (distance < 35) {
          lines.push(
            <line
              key={`${friend1.id}-${friend2.id}`}
              x1={`${friend1.x}%`}
              y1={`${friend1.y}%`}
              x2={`${friend2.x}%`}
              y2={`${friend2.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.2"
              opacity="0.8"
              filter="url(#lineGlow)"
              className="animate-pulse"
            />
          );
        }
      }
    }
    return lines;
  };

  return (
    <>
      <div className="w-full h-screen relative">
        <svg className="w-full h-full absolute inset-0">
          <defs>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8d613" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f8d613" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8d613" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0248c1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f8d613" stopOpacity="0.9" />
            </linearGradient>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="starGlowFilter">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Constellation lines */}
          {createConstellationLines()}
          
          {/* Stars */}
          {friends.map((friend) => (
            <Star
              key={friend.id}
              x={friend.x}
              y={friend.y}
              name={friend.name}
              isSpecial={friend.id === 'beatriz'}
              onClick={() => handleStarClick(friend)}
            />
          ))}
        </svg>
      </div>

      {/* Modal */}
      <Modal isOpen={!!selectedFriend} onClose={closeModal}>
        {selectedFriend && (
          <div className="text-center">
            <h2 className="text-2xl font-light text-yellow-400 mb-6">
              {selectedFriend.name}
            </h2>
            
            {selectedFriend.specialContent?.isBeatriz ? (
              <BeatrizModal 
                message={selectedFriend.message || ''} 
                musicUrl={selectedFriend.specialContent.musicUrl}
              />
            ) : (
              <div className="text-white">
                <p className="leading-relaxed whitespace-pre-wrap">
                  {selectedFriend.message}
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};