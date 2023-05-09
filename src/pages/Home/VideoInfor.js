import React from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Button from '../../components/Button';
import { BsMusicNoteBeamed } from "react-icons/bs";
import VideoContent from './VideoContent';

const cx = classNames.bind(styles);

const videoinfor = ({avatar,name,nickname,music,}) => {
  return (
    <div className={cx('video-content')}>
      <div className={cx('infor')}>
        <img
        className={cx('avatar')} 
        src= {avatar}
        alt='null'
        />

        <div className={cx('infor-name')}>
            <h3>{name}</h3>
            <p>{nickname}</p>
        </div>

        <Button outline>Follow</Button>
      </div>
      <strong className={cx('name-music')}><BsMusicNoteBeamed/> {music}</strong>
      <VideoContent/>
    </div>
  )
}

export default videoinfor
