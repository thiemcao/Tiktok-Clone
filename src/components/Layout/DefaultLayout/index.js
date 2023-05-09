import { children, createContext } from "react"
import Header from "../components/Header"
import Sidebar from "./Sidebar"
import style from './DefaultLayout.module.scss'
import classname from 'classnames/bind'

const cx = classname.bind(style);

const DefaultLayout = ({children}) => {
  return (
    <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
        <Sidebar/>
        <div className={cx('content')}>{children}</div>
        </div>
    </div>
  )
}

export default DefaultLayout;
