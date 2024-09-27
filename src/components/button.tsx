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
  const buttonClasses = cn(
    "font-semibold text-[15px] bg-[#e8b33f] w-[100%] md:w-[190px] py-[12px] md:py-[20px] rounded-md text-[white] my-[2vmin]",
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
