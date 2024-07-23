const sizes = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const variants = {
  light: "text-white",
  primary: "text-primary",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
};

export const Spinner = ({
  size = "md",
  variant = "primary",
  className = "",
}: SpinnerProps) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizes[size]} ${variants[variant]} ${className}`}
    />
  );
};
