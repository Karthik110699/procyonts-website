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
        d="M 50 8
           A 42 42 0 1 1 24.5 83.5
           A 8 8 0 0 0 32.5 87
           L 67.5 87
           A 8 8 0 0 0 75.5 83.5
           A 42 42 0 1 1 50 8
           Z
           M 50 28
           A 22 22 0 1 0 50 72
           A 22 22 0 1 0 50 28
           Z"
        fillRule="evenodd"
      />
    </svg>
  );
}