import React from 'react'
import styles from './Explore.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles);


const Explore = () => {
  return (
    <h1 className={cx('Explore')}>
      Explore
    </h1>
  )
}

export default Explore
