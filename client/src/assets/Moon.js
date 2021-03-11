import React from 'react'

const Moon = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 164.18268 163.7928"
      className={className}
    >
      <g transform="matrix(.26458 0 0 .26458 -1198.51795 -156.04443)">
        {/* Outer */}
        <ellipse 
          cx="2672.0076" 
          cy="-4134.8521" 
          rx="308.15881" 
          ry="308.15884" 
          style={{fill:'none', stroke:'#00e696', strokeWidth:'4.05396', strokeDasharray:'75'}}
          transform="rotate(67.663)"
        />
        {/* Mid */}
        <circle 
          cx="4913.165" 
          cy="310.54337" 
          r="286.33978" 
          style={{fill:'none',fillOpacity:'0', stroke:'#00e696', strokeWidth:'4.47864', strokeDasharray:'75'}} 
          transform="rotate(6.917)"
        />
        {/* Inner */}
        <circle 
          cx="4896.6943" 
          cy="510.39987" 
          r="266.58191" 
          style={{fill:'none', stroke:'#00e696', strokeWidth:'4.93687', strokeDasharray:'95'}}
          transform="rotate(4.597)"
        />
        {/* Center */}
        <path 
          d="M4763.3381 1131.1217c-111.9061-39.5414-181.6749-152.00305-164.2276-264.72187 18.9602-122.49369 118.5828-208.48451 241.5347-208.48451 93.008 0 176.0565 51.28601 216.6836 133.81136 61.1445 124.20237 10.6456 267.66052-115.4333 327.92452-36.9317 17.6528-46.6823 19.8768-93.5924 21.3475-42.0637 1.3188-58.7789-.6243-84.965-9.877z" 
          style={{fill:'#ccd6f6',fillOpacity:'1', stroke:'#00e696', strokeWidth:'10'}}
        />
      </g>
    </svg>
  )
}

export default Moon
