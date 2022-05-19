import Link from 'next/link'

import AppImage from '@components/AppImage'
import styles from './AppBackground.module.scss'
import { buildOptimizedImg } from '@lib/cloudinary'
import { DEFAULT_IMG_DIMENSIONS } from '@utils/constants'

const AppBackground = ({ heroLink, heroTitle, heroText, heroBackground }) => {
  const imageUrl = buildOptimizedImg(heroBackground.public_id)

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
            src={imageUrl}
            width={heroBackground.width}
            height={heroBackground.height}
          />
        </a>
      </Link>
    </div>
  )
}

export default AppBackground
