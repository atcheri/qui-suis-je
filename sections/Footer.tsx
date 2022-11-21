import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          {" "}
          Next.js Dev
        </span>{" "}
        &copy; {new Date().getFullYear()} No Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
