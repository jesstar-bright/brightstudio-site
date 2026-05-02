import type { SVGProps } from "react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
} & Omit<SVGProps<SVGSVGElement>, "size">;

const icon =
  (children: React.ReactNode, viewBox = "0 0 24 24") =>
  ({ size = 20, className = "", strokeWidth = 2, ...rest }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );

export const Sparkle = icon(
  <>
    <path d="M12 3v6" />
    <path d="M12 15v6" />
    <path d="M3 12h6" />
    <path d="M15 12h6" />
    <path d="M5.6 5.6l4.2 4.2" />
    <path d="M14.2 14.2l4.2 4.2" />
    <path d="M18.4 5.6l-4.2 4.2" />
    <path d="M9.8 14.2l-4.2 4.2" />
  </>,
);

export const Sun = icon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
    <path d="M6.34 17.66l-1.41 1.41" />
  </>,
);

export const Asterisk = icon(
  <>
    <path d="M12 4v16" />
    <path d="M4.93 7.51l14.14 8.98" />
    <path d="M19.07 7.51L4.93 16.49" />
  </>,
);

export const ArrowRight = icon(
  <>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </>,
);

export const ArrowUpRight = icon(
  <>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </>,
);

export const Download = icon(
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </>,
);

export const Mail = icon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </>,
);

export const Instagram = icon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </>,
);

export const Linkedin = icon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-10h4v2" />
    <rect x="2" y="9" width="4" height="11" />
    <circle cx="4" cy="4" r="2" />
  </>,
);

export const Github = icon(
  <>
    <path d="M9 19c-4 1.5-4-2.5-6-3" />
    <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 5.07 5.04 5.04 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.04 5.04 0 0 0 4 5.07 5.44 5.44 0 0 0 2.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
  </>,
);

export const Bolt = icon(
  <>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </>,
);

export const Check = icon(
  <>
    <path d="M5 12l5 5L20 7" />
  </>,
);

export const Plus = icon(
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>,
);
