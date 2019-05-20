const BuyIcon = ({ white }) => (
  <svg
    id="Icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="42"
    height="42"
    viewBox="0 0 42 42"
  >
    {!white && (
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="21"
          cy="21.368"
          r="33.536"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0ad4fa" />
          <stop offset="1" stopColor="#25bbf1" />
        </radialGradient>
      </defs>
    )}
    <circle
      id="Oval_Copy_5"
      data-name="Oval Copy 5"
      cx="21"
      cy="21"
      r="21"
      fill={white ? "#fff" : "url(#radial-gradient)"}
    />
    <path
      id="Shape_Copy_2"
      data-name="Shape Copy 2"
      d="M16.18,20H1.819a1.856,1.856,0,0,1-1.335-.563,1.729,1.729,0,0,1-.479-1.329L1.118,4.531a.6.6,0,0,1,.6-.541H4.755V2.929A2.986,2.986,0,0,1,7.787,0h2.426a2.986,2.986,0,0,1,3.032,2.93V3.99h3.032a.6.6,0,0,1,.6.541l1.112,13.577a1.727,1.727,0,0,1-.479,1.328A1.857,1.857,0,0,1,16.18,20ZM7.8,1A2.065,2.065,0,0,0,6,3.25V4h6V3.25A2.065,2.065,0,0,0,10.2,1Z"
      transform="translate(12 11)"
      fill={white ? "#0ad4fa" : "#fff"}
    />
  </svg>
);

export default BuyIcon;
