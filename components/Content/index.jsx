import styles from './index.module.scss'
import cl from 'classnames'
import SanityBlockContent from '@sanity/block-content-to-react'
import { clientConfig } from '../../lib/client'

export const Content = ({ className, body }) => (
  <div className={cl(styles.content, className)}>
    <SanityBlockContent
      blocks={body}
      imageOptions={{ w: 1120, h: 750, fit: 'max' }}
      projectId={clientConfig.projectId}
      dataset={clientConfig.dataset}
    />
  </div>
)
