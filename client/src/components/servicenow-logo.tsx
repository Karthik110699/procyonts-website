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
        d="M50 5C74.853 5 95 25.147 95 50C95 74.853 74.853 95 50 95C32.5 95 17.5 83 12 66L25 60C28.5 72 38.5 80 50 80C66.569 80 80 66.569 80 50C80 33.431 66.569 20 50 20C33.431 20 20 33.431 20 50C20 55 21 59.5 23 63.5L10 69C6.5 62 5 56.2 5 50C5 25.147 25.147 5 50 5Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}