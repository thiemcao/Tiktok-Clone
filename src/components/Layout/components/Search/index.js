import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PoppperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState,useEffect,useRef } from 'react';
import className from 'classnames/bind'
import styles from './Search.module.scss'
import { useDebounce } from '../../../../Hooks';



const cx = className.bind(styles);


const Search = () => {

    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [showResult,setShowResult]= useState(true);
    const [loading,setLoading]= useState(false);

    const debounced = useDebounce (searchValue,500);


    const inputRef=useRef()

    const handHideResult = () => {
        setShowResult(false)
    }

    useEffect(()=>{
        if(!debounced.trim()){
            setSearchResult([])
            return;
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        .then((res )=> res.json())
        .then((res) => {
            setSearchResult(res.data);
            setLoading(false)
        })
        .catch(() =>{
            setLoading(false);
        })
    },[debounced]);
  return (
    <Tippy
        onClickOutside={handHideResult}
         interactive
         visible={showResult && searchResult.length > 0}
         render={(attrs)=>(
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PoppperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result}/>
                  ))}                
                </PoppperWrapper>
              </div>
         )}
         >
            <div className={cx('search')}>
              <input placeholder='Search accounts and videos' spellCheck={false}
              ref={inputRef}
              value = {searchValue}
              onChange = {(e)=>setSearchValue(e.target.value)}
              onFocus = {() => setShowResult(true)}
              />
              {!!searchValue && !loading && (
              <button className={cx('clear')} onClick = {() => {
                setSearchValue('')
                inputRef.current.focus()
                }} >
                <AiOutlineCloseCircle className={cx('clear-icon')}></AiOutlineCloseCircle>
              </button>
              )}
              {loading && <AiOutlineLoading3Quarters className={cx('loading')}></AiOutlineLoading3Quarters>}
                <button className={cx('search-btn')}>
                  <BsSearch className={cx('search-icon')}></BsSearch>
                </button>
            </div>
         </Tippy>
  )
}

export default Search
