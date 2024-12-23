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
    "font-semibold bg-yellow-500 hover:bg-yellow-400 hover:text-black py-2 px-6 my-4 rounded-md",
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

// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import React from "react";

// interface ButtonProps {
//   children?: React.ReactNode;
//   text: string;
//   className?: string;
//   size?: string;
//   href?: string;
//   asLink?: boolean;
//   onClick?: () => void;
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   text,
//   className,
//   size,
//   href,
//   asLink,
//   onClick,
// }) => {
//   const buttonClasses = cn(
//     "font-semibold text-[15px] bg-yellow-500 hover:bg-yellow-400 w-[100%] md:w-[170px] py-[12px] md:py-[20px] rounded-md text-[white] my-[2vmin]",
//     className
//   );

//   if (asLink && href) {
//     return (
//       <Link href={href} passHref legacyBehavior>
//         <button className={buttonClasses}>{text}</button>
//       </Link>
//     );
//   }

//   return (
//     <button className={buttonClasses} onClick={onClick}>
//       {children} &rarr;
//     </button>
//   );
// };

// export default Button;
