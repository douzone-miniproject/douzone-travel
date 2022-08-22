import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import React , {useState} from "react";
import { AiOutlineStar } from "react-icons/ai";
import HandleSearch from "../../search/HandleSearch";



export const TopNavigationBar = ({setData, like, setSelectPage, dataForSearching}) => {

    const [input, setInput] = useState('');

    const onChange = (e) =>{
        setInput(e.target.value);
    }

    const onKeyPress = (e)=>{
        if(e.key === 'Enter'){
            HandleSearch(dataForSearching, setData, setSelectPage, input);
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to="/">
                    <h1 className={styles.logo}>
                        <img src="/images/logo.png" alt="logo" />
                    </h1>
                </Link>
                <div className={styles.input_wrap}>
                    <input type="text" placeholder="가고싶은 관광지를 검색해보세요!" onChange={onChange} onKeyDown={onKeyPress}/>
                    <img src="/images/icon-search.svg" onClick={()=>(HandleSearch(dataForSearching, setData, setSelectPage, input, "MAIN_TITLE"))} alt="search" />
                </div>
            </div>

            <div className={styles.menu}>
                <Link to="/like">
                    <div className={styles.like}>
                        <AiOutlineStar style={{width:"32px", height:"32px", color:"black"}}/>
                        <span>즐겨찾기</span>
                        {like.length >= 1 ? (
                            <div>
                                <p>{like.length}</p>
                            </div>
                        ) : ""}
                    </div>
                </Link>
                <Link to="">
                    <div className={styles.mypage}>
                        <img src="/images/icon-user.svg" alt="user" />
                        <span>로그인</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};