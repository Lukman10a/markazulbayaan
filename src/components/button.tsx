import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";

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
  const { theme } = useTheme();

  const buttonClasses = cn(
    "font-semibold py-2 px-6 my-4 rounded-3xl transition-colors duration-200",
    theme === 'dark' 
      ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
      : 'bg-[#E3B503] hover:bg-[#D4A503] text-black',
    className
  );

  if (asLink && href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <button className={buttonClasses}>
          <a>{text} </a>
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text} &rarr;
    </button>
  );
};

export default Button;
