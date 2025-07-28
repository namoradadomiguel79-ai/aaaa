import React from 'react';

interface StarProps {
  x: number;
  y: number;
  size?: number;
  isSpecial?: boolean;
  onClick?: () => void;
  name: string;
}

export const Star: React.FC<StarProps> = ({ 
  x, 
  y, 
  size = 8, 
  isSpecial = false, 
  onClick,
  name 
}) => {
  const starSize = isSpecial ? size * 1.5 : size;
  
  return (
    <g 
      className="cursor-pointer group"
      onClick={onClick}
      style={{ transform: `translate(${x}%, ${y}%)` }}
    >
      {/* Glow effect */}
      <circle
        cx="0"
        cy="0"
        r={starSize * 4}
        fill="url(#starGlow)"
        opacity="0.4"
        className="group-hover:opacity-80 transition-opacity duration-300"
      />
      
      {/* Star shape */}
      <path
        d={`M0,${-starSize} L${starSize * 0.3},${-starSize * 0.3} L${starSize},0 L${starSize * 0.3},${starSize * 0.3} L0,${starSize} L${-starSize * 0.3},${starSize * 0.3} L${-starSize},0 L${-starSize * 0.3},${-starSize * 0.3} Z`}
        fill={isSpecial ? "#f8d613" : "#fbfcfc"}
        stroke="#f8d613"
        strokeWidth="0.5"
        filter="url(#starGlowFilter)"
        className="group-hover:scale-125 transition-transform duration-300"
        style={{
          filter: isSpecial ? 'drop-shadow(0 0 10px #f8d613)' : 'drop-shadow(0 0 5px #f8d613)',
        }}
      />
      
      {/* Name label */}
      <text
        x="0"
        y={starSize + 25}
        textAnchor="middle"
        className="fill-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          fontSize: '14px', 
          fontWeight: '300',
          fontFamily: 'Crimson Text, serif',
          filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.8))'
        }}
      >
        {name}
      </text>
    </g>
  );
};