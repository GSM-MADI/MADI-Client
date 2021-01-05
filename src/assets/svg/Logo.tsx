import * as React from "react";

const LogoIcon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={100}
      height={37}
      viewBox="0 0 138 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.997 36h-6.396V15.15l-11.255 19.8a2.748 2.748 0 01-1.172 1.148 3.32 3.32 0 01-1.587.39c-.553 0-1.074-.13-1.563-.39a2.826 2.826 0 01-1.123-1.148L6.598 15.15V36H.25V3.7c0-.732.212-1.383.635-1.953.44-.57 1.009-.952 1.709-1.147A3.12 3.12 0 013.619.526c.342.017.667.09.977.22.325.114.618.285.879.513.26.211.48.472.659.781l14.453 25.122L35.04 2.04A3.112 3.112 0 0136.578.722 3.345 3.345 0 0138.653.6a3.183 3.183 0 011.685 1.147c.44.57.66 1.22.66 1.953V36zm41.748 0h-6.348v-8.594H54.083V36h-6.348V18.495c0-2.555.44-4.907 1.319-7.056.879-2.148 2.1-3.995 3.662-5.542 1.562-1.546 3.41-2.75 5.542-3.613C60.39 1.422 62.718.99 65.24.99h14.307a3.204 3.204 0 012.27.928c.293.293.521.635.684 1.025.163.391.244.806.244 1.245V36zM54.083 21.059h22.314V7.338H65.24c-.195 0-.61.032-1.245.098-.618.048-1.343.187-2.173.415-.814.227-1.676.577-2.588 1.05-.911.471-1.75 1.122-2.514 1.953-.765.83-1.4 1.871-1.905 3.125-.488 1.237-.732 2.742-.732 4.516v2.564zm70.996.293c0 2.132-.374 4.093-1.123 5.883-.732 1.79-1.75 3.337-3.052 4.639-1.302 1.286-2.848 2.295-4.638 3.027-1.791.733-3.736 1.099-5.835 1.099H93.292c-.456 0-.879-.081-1.27-.244a3.358 3.358 0 01-1.025-.66 3.36 3.36 0 01-.66-1.025 3.267 3.267 0 01-.243-1.27V4.189c0-.439.081-.854.244-1.245a3.36 3.36 0 01.66-1.025c.292-.293.634-.52 1.024-.684.391-.162.814-.244 1.27-.244h17.139c2.099 0 4.044.366 5.835 1.099 1.79.732 3.336 1.75 4.638 3.052 1.302 1.285 2.32 2.832 3.052 4.638.749 1.79 1.123 3.744 1.123 5.86v5.713zm-6.348-5.713c0-1.237-.203-2.368-.61-3.394-.391-1.025-.952-1.896-1.684-2.612a7.413 7.413 0 00-2.637-1.685c-1.009-.407-2.132-.61-3.369-.61h-13.99v22.314h13.99c1.237 0 2.36-.195 3.369-.586 1.025-.406 1.904-.968 2.637-1.684a7.457 7.457 0 001.684-2.613c.407-1.025.61-2.164.61-3.417v-5.713zM137.701 36h-6.347V.99h6.347V36z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={69}
          y1={-52}
          x2={69}
          y2={88}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopColor="#535353" stopOpacity={0.51} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;