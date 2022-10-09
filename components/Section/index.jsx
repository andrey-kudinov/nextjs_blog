import styles from 'index.module.scss'
import cl from 'classnames'

export const Section = ({ className, children }) => <section className={cl(className, styles.section)}>{children}</section>
