import styles from './index.module.scss'
import cl from 'classnames'
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram
} from 'react-icons/ai'
import { ScreenEgg } from '../../components'
import React from 'react'

const socialNetworks = [
  {
    href: '#',
    icon: AiFillYoutube
  },
  {
    href: '#',
    icon: AiFillGithub
  },
  {
    href: '#',
    icon: AiFillTwitterCircle
  },
  {
    href: '#',
    icon: AiFillInstagram
  }
]

export const SocialNetworks = ({ className }) => (
  <ScreenEgg>
    <ul className={cl(className, styles.list)}>
      {socialNetworks.map((s, index) => (
        <li key={index} className={styles.item}>
          <a
            href={s.href}
            className={styles.link}
            target='_blank'
            rel='noreferrer noopener'
          >
            {React.createElement(s.icon, {
              color: 'black',
              size: 50
            })}
          </a>
        </li>
      ))}
    </ul>
  </ScreenEgg>
)
