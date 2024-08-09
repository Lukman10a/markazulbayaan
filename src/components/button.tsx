import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  asLink?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  href,
  asLink,
  onClick,
}) => {
  const buttonClasses = cn("font-medium text-black", className);

  if (asLink && href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <button className={buttonClasses}>
          <a>{text}</a>
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
