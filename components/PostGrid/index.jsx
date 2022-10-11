import styles from './index.module.scss'
import cl from 'classnames'

export const PostGrid = ({ className, children }) => <div className={cl(className, styles.postGrid)}>{children}</div>
