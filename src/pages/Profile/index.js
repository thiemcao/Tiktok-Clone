import React from 'react'
import styles from './Profile.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx('profile')}>
      <h1>Profile Page</h1>
    </div>
  )
}

export default Profile;
