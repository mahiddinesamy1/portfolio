// ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="w-[120px] h-[150px] bg-white shadow-lg rounded-lg cursor-pointer flex flex-col justify-between p-2"
    >
      <img src={imageUrl} alt={title} className="w-full h-3/4 object-cover rounded-t-lg" />
      <div className="text-sm text-center">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};
