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
           A 40 40 0 1 1 28 82
           A 6 6 0 0 0 34 85
           L 66 85  
           A 6 6 0 0 0 72 82
           A 40 40 0 1 1 50 10
           Z
           M 50 30
           A 20 20 0 1 0 50 70
           A 20 20 0 1 0 50 30
           Z"
        fillRule="evenodd"
      />
    </svg>
  );
}