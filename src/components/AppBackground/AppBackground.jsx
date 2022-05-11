import Link from "next/link";

import AppImage from "@components/AppImage";
import styles from "./AppBackground.module.scss";

const AppBackground = ({ heroLink, heroTitle, heroText, heroBackground }) => {
  return (
    <div className={styles.hero}>
      <Link href={heroLink}>
        <a>
          <div className={styles.heroContent}>
            <h2>{heroTitle}</h2>
            <p>{heroText}</p>
          </div>

          <AppImage
            className={styles.heroImage}
            src={heroBackground.url}
            width={heroBackground.width}
            height={heroBackground.height}
          />
        </a>
      </Link>
    </div>
  );
};

export default AppBackground;
