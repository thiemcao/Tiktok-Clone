import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { AiOutlineHeart,AiOutlineMessage } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

const cx = classNames.bind(styles);

const VideoContent = () => {
  return (
    <div className={cx('content-video')} >
    <img  className={cx('video')} 
    src='https://images2.thanhnien.vn/Uploaded/tuyenth/2022_09_01/8-6281.jpg'
    alt='rose'
    />
    <i className={cx('icon')}>
      <AiOutlineHeart/>
      <AiOutlineMessage/>
      <FaShare/>
    </i>

    </div>
  )
}


export default VideoContent
