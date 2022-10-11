import styles from './index.module.scss'
import cl from 'classnames'
import { ScreenEgg } from '../../components'

export const BuyMeCoffee = ({ className }) => (
  <ScreenEgg type='right'>
    <div className={cl(className, styles.buyCoffee)}>
      <a href='#' target='_black' rel='noreferrer noopener' className={styles.buyCoffeeButton}>
        Buy me a coffee
      </a>
    </div>
  </ScreenEgg>
)
