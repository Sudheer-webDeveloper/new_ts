import React from 'react';

// Define prop types for the SVG component
type CustomIconProps = {
  width?: number;
  height?: number;
  fillColor?: string;
};

const LogoIcon: React.FC<CustomIconProps> = ({
  width = 40,
  height = 40,
  fillColor = '#574C95',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3757 1.50124C18.3773 -0.500411 21.6227 -0.500413 23.6243 1.50124L38.4988 16.3757C40.5004 18.3773 40.5004 21.6227 38.4988 23.6243L23.6243 38.4988C21.6227 40.5004 18.3773 40.5004 16.3757 38.4988L1.50124 23.6243C-0.500412 21.6227 -0.500413 18.3773 1.50124 16.3757L16.3757 1.50124ZM30.55 15.6756L34.8745 20L20 34.8745L5.12554 20L20 5.12554L26.9257 12.0512L19.1991 19.7778L15.355 15.9337L11.7307 19.558L19.1991 27.0264L30.55 15.6756Z"
      fill={fillColor} // Use the fillColor prop for the path color
    />
    <path
      d="M34.8745 20L30.55 15.6756L19.1991 27.0264L11.7307 19.558L15.355 15.9337L19.1991 19.7778L26.9257 12.0512L20 5.12554L5.12554 20L20 34.8745L34.8745 20Z"
      fill="white"
    />
  </svg>
);

export default LogoIcon;
