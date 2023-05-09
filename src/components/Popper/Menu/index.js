import React, { children, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import className from 'classnames/bind'
import styles from './menu.module.scss'
import {Wrapper as PoppperWrapper} from '../../../components/Popper/'
import MenuItems from './MenuIems'
import Header from './Header'



const cx = className.bind(styles);

const Menu = ({children, items=[] }) => {

    const [history,setHistory] = useState([{data:items}])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item,index)=>{
            const isParent = !!item.children
            return <MenuItems 
            key={index} data = {item} 
            onClick = {()=>{
                if(isParent){
                   setHistory(prev => [...prev, item.children]);
                }
            }} />
        })
    }

  return (
    <div>
       <Tippy
        delay={[0,700]}
         interactive
        placement='bottom-end'
         render={(attrs)=>(
              <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                <PoppperWrapper className={cx('menu-popper')} >
                   { history.length > 1 &&<Header title={"Language"} onBack={()=>{
                    setHistory((prev) => prev.slice(0,prev.length - 1))
                   }}>
                    </Header>}
                  {renderItems()}
                </PoppperWrapper>
              </div>
         )}

         onHidden = {() => setHistory((prev)=> prev.slice(0,1))}
         >
            {children}
          </Tippy>
    </div>
  )
}

export default Menu
