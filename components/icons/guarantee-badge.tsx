import { SVGProps } from 'react';

export function GuaranteedUnderline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 352 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path 
        d="M3 16.7302C55.3333 6.23021 169.8 -10.2698 348.5 22.2302" 
        stroke="#DC2626" // red-600
        strokeWidth="6" 
        strokeLinecap="round" 
      />
    </svg>
  );
}