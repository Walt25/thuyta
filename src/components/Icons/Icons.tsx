/* eslint-disable @typescript-eslint/no-unused-vars */
interface Props {
  weight?: string;
  height?: string;
}

export const ScrollLeft = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_87)">
        <g filter="url(#filter0_d_1_87)">
          <path
            d="M91.6667 50.0003C91.6667 26.9878 73.0125 8.33366 50 8.33366C26.9875 8.33366 8.33337 26.9878 8.33337 50.0003C8.33337 73.0128 26.9875 91.667 50 91.667C73.0125 91.667 91.6667 73.0128 91.6667 50.0003Z"
            fill="white"
            fill-opacity="0.3"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M55.25 64.708L40.5834 49.9997L55.25 35.2913"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_87"
          x="-7.66663"
          y="-7.66602"
          width="115.333"
          height="115.333"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_87"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_87"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_87">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="translate(0 100) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ScrollRight = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_86)">
        <g filter="url(#filter0_d_1_86)">
          <path
            d="M8.33342 50.0003C8.33342 26.9878 26.9876 8.33366 50.0001 8.33366C73.0126 8.33366 91.6667 26.9878 91.6667 50.0003C91.6667 73.0128 73.0126 91.667 50.0001 91.667C26.9876 91.667 8.33342 73.0128 8.33342 50.0003Z"
            fill="white"
            fill-opacity="0.3"
            shape-rendering="crispEdges"
          />
        </g>
        <path
          d="M44.7501 64.708L59.4167 49.9997L44.7501 35.2913"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_86"
          x="-7.6665"
          y="-7.66602"
          width="115.333"
          height="115.333"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_86"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_86"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_86">
          <rect
            width="100"
            height="100"
            fill="white"
            transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 100 100)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
