import React from 'react'
import classname from 'classnames/bind'
import style from './AccountItem.module.scss'
import { BsCheckAll } from "react-icons/bs";
import { Link } from 'react-router-dom';
import routesConfig from '../../config/routes';

const cx = classname.bind(style)

const AccountItem = ({data}) => {
  return (
    <Link to={routesConfig.profile} className={cx('wrapper')}>
      <img className={cx('avatar')}
      src = {data.avatar} 
      alt={data.full_name}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
            <span>{data.full_name}</span>
            { data.tick && <BsCheckAll className={cx('check')}/>}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  )
}

export default AccountItem;
