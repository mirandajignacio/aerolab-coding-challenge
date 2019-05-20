const ArrowRightIcon = ({ name }) => (
  <svg
    id="arrow-right"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <title>{name || 'Arrow right'}</title>
    <g
      id="Oval_4"
      fill="none"
      stroke="#d9d9d9"
      strokeMiterlimit="10"
      strokeWidth="1"
    >
      <circle cx="24" cy="24" r="24" stroke="none" />
      <circle cx="24" cy="24" r="23.5" fill="none" />
    </g>
    <path
      id="Shape"
      d="M10.59,0,6-4.58,1.41,0,0-1.41l6-6,6,6Z"
      transform="translate(20.295 17.705) rotate(90)"
      fill="#d9d9d9"
    />
  </svg>
);

export default ArrowRightIcon;
