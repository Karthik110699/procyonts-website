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
        d="M 50 10
           A 40 40 0 1 1 25 82
           L 35 78
           A 30 30 0 0 1 30 50  
           A 30 30 0 1 1 70 50
           A 30 30 0 0 1 65 78
           L 75 82
           A 40 40 0 1 1 50 10
           Z"
        fillRule="evenodd"
      />
    </svg>
  );
}