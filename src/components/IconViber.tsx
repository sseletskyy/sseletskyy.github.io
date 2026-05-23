import React from 'react';

interface Props extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
}

export const IconViber: React.FC<Props> = ({ className, ...props }) => {
  const defaultClassName = 'w-6 h-6 text-gray-800 dark:text-white';
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <svg
      aria-hidden={true}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={combinedClassName}
      {...props}
    >
      <path d="M11.398.002C5.518.3.623 5.24.25 11.127c-.172 2.77.5 5.593 1.96 7.93L.25 23.75l4.834-1.267a11.342 11.342 0 0 0 5.57 1.46c6.116 0 11.1-4.944 11.146-11.076C21.84 6.668 17.196 1.894 11.398.002zM17.5 16.82c-.23.652-1.35 1.25-1.876 1.327-.48.07-1.084.098-1.748-.11-.404-.13-.922-.303-1.583-.594-2.773-1.196-4.59-3.972-4.73-4.155-.137-.183-1.115-1.48-1.115-2.823 0-1.344.706-2.006 1.073-2.38.366-.373.8-.466 1.067-.466.267 0 .533.003.768.013.247.012.578-.094.904.689.336.808 1.143 2.79 1.245 2.993.1.203.167.44.033.704-.134.265-.2.43-.4.66-.2.23-.42.514-.6.69-.2.19-.408.395-.175.774.233.38.1.62 1.65 2.045 1.378 1.252 2.536 1.638 2.894 1.82.358.183.565.153.773-.092.207-.244.893-1.042 1.132-1.4.238-.36.477-.3.804-.18.327.12 2.075.978 2.432 1.155.357.178.596.266.682.414.087.147.058.853-.17 1.516z" />
    </svg>
  );
};
