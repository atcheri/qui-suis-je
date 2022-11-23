import { useRouter } from "next/router";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import HightLight from "../../components/HighLight";
import TypeWriter from "../../components/TypeWriter";

const Punchline: FC = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  switch (locale) {
    case "fr":
      return (
        <h2 className="text-2xl sm:text-6xl font-bold">
          Ma mission est de{" "}
          <TypeWriter words={["develop", "grow"].map((k) => t(k) || k)} /> des
          produits en livrant du code <HightLight>production</HightLight>
        </h2>
      );
    case "ja":
      return (
        <h2 className="text-2xl sm:text-6xl font-bold">
          ビジネスの
          <TypeWriter words={["develop", "grow"].map((k) => t(k) || k)} />
          を支援する
          <br />
          <HightLight>プロダクション</HightLight>
          <br />
          コードを作成
        </h2>
      );
    case "de":
      return (
        <h2 className="text-2xl sm:text-6xl font-bold">
          Ma mission est de{" "}
          <TypeWriter words={["develop", "grow"].map((k) => t(k) || k)} /> des
          produits en livrant du code <HightLight>production</HightLight>
        </h2>
      );
    case "it":
      return (
        <h2 className="text-2xl sm:text-6xl font-bold">
          Spedisco il codice di <HightLight>produzione</HightLight> e aiuto le
          aziende a{" "}
          <TypeWriter words={["develop", "grow"].map((k) => t(k) || k)} />
        </h2>
      );
    default:
      return (
        <h2 className="text-2xl sm:text-6xl font-bold">
          I ship <HightLight>production</HightLight> code, <br /> and help
          business to <TypeWriter words={["develop", "grow"]} />
        </h2>
      );
  }
};

export default Punchline;
