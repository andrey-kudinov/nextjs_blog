import styles from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Article = ({ className, children, backUrl }) => (
  <article className={cl(className, styles.article)}>
    <Link href={backUrl}>
      <a className={styles.back}>
        <AiOutlineArrowLeft />
      </a>
    </Link>
    <div className={styles.content}>{children}</div>
  </article>
)
