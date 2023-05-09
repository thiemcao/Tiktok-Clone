
import className from 'classnames/bind'
import styles from './menu.module.scss'
import { IoIosArrowBack } from "react-icons/io";




const cx = className.bind(styles);

const Header = ({title,onBack}) => {
  return (
    <div className={cx('header')}>
       <button className={cx('back-btn')} onClick={onBack} >
        <IoIosArrowBack className={cx('icon-back')}></IoIosArrowBack>
        </button>
       <h4 className={cx('Header-title')}>{title}</h4>
    </div>
  )
}

export default Header
