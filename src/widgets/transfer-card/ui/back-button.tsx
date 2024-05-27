import { HTMLAttributes } from 'react';

export const BackButton = (props: HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" stroke="#F0EFF4" />
      <path
        d="M24.0186 12L15.8433 19.2519C15.3948 19.6498 15.3948 20.3502 15.8433 20.7481L24.0186 28"
        stroke="#8375E9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
