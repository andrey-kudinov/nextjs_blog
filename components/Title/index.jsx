import styles from './index.module.scss'
import cl from 'classnames'

export const Title = ({ className, children, type }) => {
  if (type === 'small') {
    return (
      <h3 className={cl(className, styles.title, styles.small)}>{children}</h3>
    )
  }

  return (
    <h2 className={cl(className, styles.title, styles.medium)}>{children}</h2>
  )
}
