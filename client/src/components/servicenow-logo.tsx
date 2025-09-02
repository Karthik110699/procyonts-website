interface ServiceNowLogoProps {
  className?: string;
}

export function ServiceNowLogo({ className }: ServiceNowLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10 
           A 40 40 0 1 1 15 65
           A 30 30 0 0 1 25 50
           A 25 25 0 1 0 75 50
           A 40 40 0 0 1 50 10
           Z"
        fillRule="evenodd"
      />
    </svg>
  );
}