import { FC, PropsWithChildren } from "react";

import styles from "./highlight.module.scss";

type HighLightProps = {
  variant?: "stabylo" | "stain";
};

const HighLight: FC<PropsWithChildren<HighLightProps>> = ({
  children,
  variant = "stabylo",
}) => {
  return variant == "stabylo" ? (
    <span className={styles.stabylo}>{children}</span>
  ) : (
    <span className={styles.highlightContainer}>
      <span className={styles.highlight}>{children}</span>
    </span>
  );
};

export default HighLight;
