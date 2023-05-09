import React from 'react';
import { children } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = ({children}) => {
  return (
    <nav>
        {children}
    </nav>
  )
}

export default Menu
