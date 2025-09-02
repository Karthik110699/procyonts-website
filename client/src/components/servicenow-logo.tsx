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
        d="M 50 5
           A 45 45 0 1 1 28 85
           A 12 12 0 0 0 40 88
           L 60 88
           A 12 12 0 0 0 72 85
           A 45 45 0 1 1 50 5
           Z
           M 50 25
           A 25 25 0 1 0 50 75
           A 25 25 0 1 0 50 25
           Z"
        fillRule="evenodd"
      />
    </svg>
  );
}