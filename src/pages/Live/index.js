import React from 'react'
import styles from './Live.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Live = () => {
  return (
    <h1 className={cx('live')}>LIVE</h1>
  )
}

export default Live
