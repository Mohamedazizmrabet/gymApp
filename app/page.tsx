import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>WORKOUT WITH ME</h1>
      <div className={styles.images}>

      <Image 
  src="/mainPhoto.svg"
  alt="My SVG"
  width={400}
  height={400}
/>
<Image 
  src="/videoCount.svg"
  alt="My SVG"
  width={206}
  height={96}
/>
<Image
  src="/workOutPlan.svg"
  alt="My SVG"
  width={193}
  height={98}
/>
      </div>

    </div>
  )
}
