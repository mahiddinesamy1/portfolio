import React from 'react';
import styles from '../Laptop/Laptop.module.css';

interface AppIconProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string; 
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const AppIcon: React.FC<AppIconProps> = ({ 
  icon, 
  label, 
  onClick, 
  href, 
  className, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div
      className={`app-icone ${className}`} // Added flexibility for extra styles
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.appIcon} onClick={onClick}>
        {href ? (
          <a href={href}>
            {icon}
            <span>{label}</span>
          </a>
        ) : (
          <>
            {icon}
            <span>{label}</span>
          </>
        )}
      </div>
    </div>
  );
};
