import styles from './index.module.scss'
import cl from 'classnames'

export const Cover = ({ className, title }) => (
  <div className={cl(className, styles.cover)}>
    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
  </div>
)
