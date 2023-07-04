

const facebook = ({width='8', height='16', className=''}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.68506L6.01769 2.70866C6.01769 2.70866 3.98896 2.42228 3.98896 4.26667V5.33333H6.98068V8.53333H3.98896V16H0.997241V8.53333H0V5.33333H0.997241V4.26667C1.43864 1.78723 2.44133 0 4.9862 0C5.68918 0 7.17141 0.0425532 7.97793 0L8 2.68506Z"
        // fill={fill}
      />
    </svg>
  );
}

export default facebook