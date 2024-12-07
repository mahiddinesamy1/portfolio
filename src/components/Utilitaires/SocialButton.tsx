import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

export function SocialButton({ icon, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      {icon}
    </a>
  );
}