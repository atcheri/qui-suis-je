import { FC } from "react";
import Link from "next/link";
import { HiLightBulb } from "react-icons/hi2";

const Logo: FC = () => {
  return (
    <Link href="/" className="my-2 flex items-center space-x-1 text-indigo-800">
      <HiLightBulb className="h-8 w-8 flex-shrink-0 mr-3" />
      <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
        Name
      </span>
    </Link>
  );
};

export default Logo;
