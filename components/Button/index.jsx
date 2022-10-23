import styles from './index.module.scss'
import cl from 'classnames'

export const Button = ({ className, children, onClick, disabled }) => (
  <div className={cl(className, styles.button)} onClick={onClick} disabled={disabled}>
    {children}
  </div>
)
