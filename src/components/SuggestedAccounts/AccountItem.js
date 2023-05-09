import React from 'react'
import styles from './SuggestedAccounts.module.scss'
import classNames from 'classnames/bind'
import { AiFillCheckCircle } from "react-icons/ai";

const cx = classNames.bind(styles);


const AccountItem = ({nickname,name}) => {
  return (
    <div className={cx('account-item')}>
      <img
      className={cx('avatar')}
      src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f6bd1cf692ce1fc908c775d8312c48d2~c5_100x100.jpeg?x-expires=1683543600&x-signature=qLZ25rUzJcvJFxBpyLkf0e0QKaE%3D'
      alt='jaykiy'
      />
    <div className={cx('item-info')}>
    <p className={cx('nick-name')}><h4>{nickname}</h4>  <AiFillCheckCircle className={cx('check')}/></p>
    <p className={cx('name')}>{name}</p>
    </div>
    </div>
  )
}

export default AccountItem
