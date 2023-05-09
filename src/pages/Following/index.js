import React from 'react'
import styles from './Following.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles);


const Following = () => {
  return (
    <div className={cx('following')}>
        <h1>Following Pages</h1>
    </div>
  )
}

export default Following
