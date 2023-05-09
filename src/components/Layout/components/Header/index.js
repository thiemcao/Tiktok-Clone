import styles from './Header.module.scss'
import className from 'classnames/bind'
import logo from '../../../../assets/images/tiktoklogo.png'
import Button from '../../../Button';
import { FaEllipsisV } from "react-icons/fa";
import Menu from '../../../Popper/Menu';
import { FaAutoprefixer,FaRegKeyboard,FaQuestion } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../config/routes';

const cx = className.bind(styles);


const MENU_ITEMS=[
  {
    icon: <FaAutoprefixer></FaAutoprefixer>,
    title:'English',
    children:{
      title:'English',
      data: [
        {
          code:'en',
          title:'English',
        },
        {
          code:'vn',
          title:'Viet Nam',
        },
      ]
    }
  },
  {
    icon: <FaQuestion></FaQuestion>,
    title:'Feedback and help ',
    to:'/feedback',
  },
  {
    icon: <FaRegKeyboard></FaRegKeyboard>,
    title:'Keyboard Shortcut',
  },
  {
    icon: <CiDark></CiDark>,
    title:'Dark mode ' ,
    dark:<input type={'checkbox'}></input>,
  }
];

const Header = () => {
   

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
         <Link to={routesConfig.home}> <img src={logo} alt="tiktok" height={42} width={118}  /></Link>
        </div>
         <Search/>
        <div className={cx('actions')}>
          <Button text to={routesConfig.upload} >Upload</Button>
          <Button primary >Login</Button>
    
          <Menu items={MENU_ITEMS}>
          <button className={cx('more-btn')}><FaEllipsisV></FaEllipsisV></button>
          </Menu>

        </div>
      </div>
    </header>
  )
}

export default Header;
