import React from "react";

type IconType = {
  currentColor: string;
};

const CancelIcon = ({ currentColor }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke={currentColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cursor-pointer hidden lg:block "
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CopyIcon = ({ currentColor }: IconType) => (
  <svg
    stroke={currentColor}
    className="cursor-pointer"
    fill={currentColor}
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1.5rem"
    width="1.5rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 0 1-1.75 1.75H8.774a1.75 1.75 0 0 1-1.75-1.75Zm1.75-.25a.25.25 0 0 0-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path>
    <path d="M1.995 10.749a1.75 1.75 0 0 1 1.75-1.751H5.25a.75.75 0 1 1 0 1.5H3.745a.25.25 0 0 0-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 0 0 .25-.25v-1.51a.75.75 0 1 1 1.5 0v1.51A1.75 1.75 0 0 1 13.25 22h-9.5A1.75 1.75 0 0 1 2 20.25l-.005-9.501Z"></path>
  </svg>
);

const LockIcon = ({ currentColor }: IconType) => (
  <svg
    stroke={currentColor}
    fill={currentColor}
    className="cursor-pointer"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1.5rem"
    width="1.5rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
  </svg>
);

const OpenIcon = ({ currentColor }: IconType) => (
  <svg
    stroke="currentColor"
    fill={currentColor}
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="cursor-pointer"
    height="1.5rem"
    width="1.5rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2z"></path>
  </svg>
);

const DragIcon = ({ currentColor }: IconType) => (
  <svg
    stroke={currentColor}
    fill={currentColor}
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1.5rem"
    className="cursor-grab"
    width="1.5rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9l2.146 2.146-.707.708-3-3v-.708l3-3 .707.708L3 8h10l-2.146-2.146.707-.708 3 3v.708l-3 3-.707-.707L13 9H3z"
    ></path>
  </svg>
);

// desktop svg
<svg
  version="1.1"
  id="homepage_hero_image-mobile"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 498.94 301.86"
  xmlSpace="preserve"
>
  <path d="M450.79,288.72V20.22c0.1-7.6-6.1-13.9-13.8-14c0,0,0,0-0.1,0H59.59c-7.7,0.1-13.9,6.3-13.9,13.9c0,0,0,0,0,0.1v268.5 H450.79z"></path>
  <g id="homepage_hero-generator-laptop-mobile">
    <path
      className="first"
      d="M324.79,16.12h112c2.2,0,4,1.8,4,4v255h-116V16.12z"
    ></path>
    <rect
      x="249.79"
      y="16.12"
      fill="yellow"
      className="second"
      width="115"
      height="259"
    ></rect>
    <rect
      x="171.79"
      y="16.12"
      fill="pink"
      className=" third"
      width="115"
      height="259"
    ></rect>
    <rect
      x="94.79"
      y="16.12"
      className=" fourth"
      width="116"
      height="259"
    ></rect>
    <path
      fill="purple"
      className=" fifth"
      d="M59.79,16.12h74v259h-78v-255C55.79,17.92,57.59,16.12,59.79,16.12z"
    ></path>
  </g>
  <path
    fill="#c9c8cc"
    d="M9.79,285.22h480l0,0c0,5.5-4.5,10-10,10h-460C14.29,295.22,9.79,290.72,9.79,285.22L9.79,285.22z"
  ></path>
</svg>;
export { CopyIcon, LockIcon, CancelIcon, DragIcon, OpenIcon };
