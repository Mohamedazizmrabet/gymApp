import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>

      <h1 className={styles.title1}>WORKOUT</h1>
      <h1 className={styles.title2}>WITH ME</h1>
      </div>
      <div className={styles.images}>

      <Image className={styles.img1}
  src="/mainPhoto.svg"
  alt="My SVG"
  width={400}
  height={400}
/>
<Image className={styles.img2}
  src="/videoCount.svg"
  alt="My SVG"
  width={206}
  height={96}
/>
<Image className={styles.img3}
  src="/workOutPlan.svg"
  alt="My SVG"
  width={193}
  height={98}
/>
      </div>

    </div>
  )
}
