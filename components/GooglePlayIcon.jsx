const GooglePlayIcon = ({ color }) => (
  <svg
    fill={color}
    style={{
      transition: "fill 0.5s ease-in-out", // Smooth color transition
      fill: color, // Bind fill to state change
    }}
    viewBox="-1 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="m3.751.61 13.124 7.546-2.813 2.813zm-2.719-.61 12.047 12-12.046 12c-.613-.271-1.033-.874-1.033-1.575 0-.023 0-.046.001-.068v.003-20.719c-.001-.019-.001-.042-.001-.065 0-.701.42-1.304 1.022-1.571l.011-.004zm19.922 10.594c.414.307.679.795.679 1.344 0 .022 0 .043-.001.065v-.003c.004.043.007.094.007.145 0 .516-.25.974-.636 1.258l-.004.003-2.813 1.593-3.046-2.999 3.047-3.047zm-17.203 12.796 10.312-10.359 2.813 2.813z"></path>
    </g>
  </svg>
);

export default GooglePlayIcon;
