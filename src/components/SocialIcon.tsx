import React from 'react';
import { IconInstagram } from './IconInstagram';

interface Props extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  socialName: string;
}

const socialIcons: Record<string, React.FC> = {
  Instagram: IconInstagram,
};

export const SocialIcon: React.FC<Props> = ({ className, socialName, ...props }) => {
  const defaultClassName = 'w-6 h-6 text-gray-800 dark:text-white';
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName; // Combine classes
  const Icon = socialIcons[socialName];
  const allProps = { ...props, className: combinedClassName };

  return Icon ? <Icon {...allProps} /> : null;
};
