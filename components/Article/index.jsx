import styles from './index.module.scss'
import cl from 'classnames'

export const Article = ({ className, children }) => (
  <article className={cl(className, styles.article)}>{children}</article>
)
