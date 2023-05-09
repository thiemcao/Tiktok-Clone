import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MenuItem = ({to,icon,title}) => {
  return (
    <NavLink to={to} className={(nav) => cx('menu-item',{active: nav.isActive})}>
      {icon}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  )
}

export default MenuItem;
