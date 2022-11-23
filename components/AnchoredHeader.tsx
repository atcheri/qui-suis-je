import Link from "next/link";
import React, { FC } from "react";
import { HiOutlineHashtag } from "react-icons/hi2";

import HighLight from "./HighLight";

type AnchoredHeaderProps = {
  anchor: string;
  title: string;
  subTitle: string;
};

const AnchoredHeader: FC<AnchoredHeaderProps> = ({
  anchor,
  title,
  subTitle,
}) => {
  return (
    <>
      <Link href={`/#${anchor}`}>
        <h2
          id={anchor}
          className="flex items-center gap-1 text-2xl font-bold mb-2"
        >
          <HiOutlineHashtag />
          <HighLight className="text-gray-700 dark:text-white">
            {title}
          </HighLight>
        </h2>
      </Link>
      <p className="sub-title">{subTitle}</p>
    </>
  );
};

export default AnchoredHeader;
