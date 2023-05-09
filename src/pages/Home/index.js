import React from 'react'
import VideoInfor from './VideoInfor'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles);


const Home = () => {
  return (
    <div className={cx('content')}>
     <VideoInfor
     avatar={'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c36dd298f3bd926eb4e516b3c65a0c30~c5_100x100.jpeg?x-expires=1683709200&x-signature=5MfCzMzqaTOR7ao1VpMTboyPDs8%3D'}
     name={'wynna_wu'}
     nickname={'Nguyễn Thị Quỳnh Oanh'}
     music={'original sound - Nguyễn Thị Quỳnh Oanh'}
     vid='https://images2.thanhnien.vn/Uploaded/tuyenth/2022_09_01/8-6281.jpg'
     />

<VideoInfor
     avatar={'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e1fb9e5a084ca7082e7030ad0053bfff~c5_100x100.jpeg?x-expires=1683716400&x-signature=yIcDHY%2BUXuARcsnd6xwEbP%2BQneU%3D'}
     name={'linym_'}
     nickname={'N A R U 🐰'}
     music='nhạc nền - Nhậc Cò'
     />

    </div>
  )
}

export default Home
