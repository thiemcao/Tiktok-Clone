import styles from './Sidebar.module.scss'
import classname from 'classnames/bind'
import Menu,{MenuItem} from './menu'
import { AiOutlineHome,AiOutlineUsergroupDelete} from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import routesConfig from '../../../../config/routes';
import SuggestedAccounts from '../../../SuggestedAccounts';


const cx = classname.bind(styles)

const index = ({title,icon}) => {
  return (
    <aside className={cx('wrapper')}>
      <Menu >
        <MenuItem title='Home' icon= {<AiOutlineHome/>} to={routesConfig.home} />
        <MenuItem title='Following' icon={<AiOutlineUsergroupDelete/> } to={routesConfig.following} />
        <MenuItem title='Explore' icon={<MdOutlineExplore/> } to={routesConfig.explore} />
        <MenuItem title='LIVE' icon= {<RiLiveLine/>} to={routesConfig.live}   />
      </Menu>

      <SuggestedAccounts label='Suggested accounts' btn='See all '/>
      <SuggestedAccounts label='Following accounts' btn='See more'/>
    </aside>
  )
}

export default index
