const CoinIcon = ({ name }) => (
  <svg
    id="money"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title>{name || 'Coin'}</title>
    <defs>
      <radialGradient
        id="radial-gradient-coin"
        cx="12"
        cy="12"
        r="16.471"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffcf00" />
        <stop offset="1" stopColor="#f7ae15" />
      </radialGradient>
    </defs>
    <circle
      id="Oval_Copy_3"
      cx="12"
      cy="12"
      r="12"
      fill="url(#radial-gradient-coin)"
    />
    <path
      id="Shape"
      d="M9.143,18.285a9.143,9.143,0,1,1,9.142-9.142A9.153,9.153,0,0,1,9.143,18.285Zm0-17.214a8.072,8.072,0,1,0,8.071,8.072A8.081,8.081,0,0,0,9.143,1.071Z"
      transform="translate(2.857 2.857)"
      fill="#f8b013"
    />
    <path
      id="Shape-2"
      d="M7.111,14.222A7.1,7.1,0,0,1,2.091,2.091a7.1,7.1,0,1,1,10.04,10.04A7.059,7.059,0,0,1,7.111,14.222Zm0-13.134a6.023,6.023,0,1,0,6.023,6.023A6.03,6.03,0,0,0,7.111,1.088Z"
      transform="translate(4.889 4.889)"
      fill="#f8b013"
    />
  </svg>
);

export default CoinIcon;
