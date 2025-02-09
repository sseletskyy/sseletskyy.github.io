import React from 'react';

type Props = {
  onClick: () => void;
};
export const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:scale-125 rounded-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 transition duration-300 ease-in-out" // Basic button styles
      aria-label="Delete" // Accessibility
    >
      <svg // SVG cross icon
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10" // Icon size
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
