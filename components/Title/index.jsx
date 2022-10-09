import styles from 'index.module.scss'
import cl from 'classnames'

export const Title = ({ className, children }) => <h2 className={cl(className, styles.title)} >{children}</h2>
