import React from 'react'
import style from './SuggestedAccounts.module.scss';
import classname from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classname.bind(style);

const SuggestedAccounts = ({label,btn}) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem nickname='jaykiy0710' name='Nguyen Oanh'/>
      <AccountItem nickname='thuwbabi24' name='Thư Babiii 💋'/>
      <AccountItem nickname='jaykiy0710' name='Nguyen Oanh'/>
      <p className={cx('more-btn')}>{btn}</p>
    </div>

  )
}

export default SuggestedAccounts
