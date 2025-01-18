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

export const Location = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.8797 8.5C18.9197 -0.159998 6.08971 -0.169998 4.11971 8.49C2.96971 13.57 6.12971 17.88 8.88971 20.54C9.85764 21.4735 11.15 21.9952 12.4947 21.9952C13.8395 21.9952 15.1318 21.4735 16.0997 20.54C18.8697 17.88 22.0297 13.58 20.8797 8.5ZM13.6941 13.1927C13.3156 13.3495 12.9099 13.4302 12.5001 13.4302C11.6727 13.4302 10.8791 13.1015 10.294 12.5164C9.70884 11.9312 9.38013 11.1377 9.38013 10.3102C9.38013 9.48271 9.70884 8.68913 10.294 8.10401C10.8791 7.5189 11.6727 7.19019 12.5001 7.19019C12.9099 7.19019 13.3156 7.27089 13.6941 7.42768C14.0726 7.58448 14.4166 7.81429 14.7063 8.10401C14.996 8.39373 15.2258 8.73768 15.3826 9.11621C15.5394 9.49475 15.6201 9.90046 15.6201 10.3102C15.6201 10.7199 15.5394 11.1256 15.3826 11.5042C15.2258 11.8827 14.996 12.2266 14.7063 12.5164C14.4166 12.8061 14.0726 13.0359 13.6941 13.1927Z"
      fill="white"
    />
  </svg>
);

export const Call = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.47 18.83C22.47 19.19 22.39 19.56 22.22 19.92C22.05 20.28 21.83 20.62 21.54 20.94C21.05 21.48 20.51 21.87 19.9 22.12C19.3 22.37 18.65 22.5 17.95 22.5C16.93 22.5 15.84 22.26 14.69 21.77C13.54 21.28 12.39 20.62 11.25 19.79C10.0881 18.9401 8.99169 18.0041 7.97 16.99C6.95877 15.972 6.0261 14.8789 5.18 13.72C4.36 12.58 3.7 11.44 3.22 10.31C2.74 9.17 2.5 8.08 2.5 7.04C2.5 6.36 2.62 5.71 2.86 5.11C3.1 4.5 3.48 3.94 4.01 3.44C4.65 2.81 5.35 2.5 6.09 2.5C6.37 2.5 6.65 2.56 6.9 2.68C7.16 2.8 7.39 2.98 7.57 3.24L9.89 6.51C10.07 6.76 10.2 6.99 10.29 7.21C10.38 7.42 10.43 7.63 10.43 7.82C10.43 8.06 10.36 8.3 10.22 8.53C10.09 8.76 9.9 9 9.66 9.24L8.9 10.03C8.79 10.14 8.74 10.27 8.74 10.43C8.74 10.51 8.75 10.58 8.77 10.66C8.8 10.74 8.83 10.8 8.85 10.86C9.03 11.19 9.34 11.62 9.78 12.14C10.23 12.66 10.71 13.19 11.23 13.72C11.77 14.25 12.29 14.74 12.82 15.19C13.34 15.63 13.77 15.93 14.11 16.11C14.16 16.13 14.22 16.16 14.29 16.19C14.37 16.22 14.45 16.23 14.54 16.23C14.71 16.23 14.84 16.17 14.95 16.06L15.71 15.31C15.96 15.06 16.2 14.87 16.43 14.75C16.66 14.61 16.89 14.54 17.14 14.54C17.33 14.54 17.53 14.58 17.75 14.67C17.97 14.76 18.2 14.89 18.45 15.06L21.76 17.41C22.02 17.59 22.2 17.8 22.31 18.05C22.41 18.3 22.47 18.55 22.47 18.83Z"
      fill="white"
    />
  </svg>
);

export const Watch = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6.02767V10.1943L12.0833 11.4443M17.5 10.1943C17.5 14.3365 14.1421 17.6943 10 17.6943C5.85786 17.6943 2.5 14.3365 2.5 10.1943C2.5 6.0522 5.85786 2.69434 10 2.69434C14.1421 2.69434 17.5 6.0522 17.5 10.1943Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

)
