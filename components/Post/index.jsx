import styles from './index.module.scss'
import cl from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import { Title } from '../Title'

export const Post = ({ className, image, title, description, slug }) => (
  (<Link
    href={`/post/${encodeURIComponent(slug.current)}`}
    class={cl(className, styles.post)}
    className={styles.link}>

    <Title type='small' className={styles.title}>
      {title}
    </Title>
    <div className={styles.content}>
      <div>
        <Image
          src={urlFor(image).url()}
          alt={image.caption}
          width="100px"
          height="100px"
        />
      </div>
      <div className={styles.description}>{description}</div>
    </div>

  </Link>)
)
