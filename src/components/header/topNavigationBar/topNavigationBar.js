import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import React , {useState} from "react";
import { AiOutlineStar } from "react-icons/ai";

export const TopNavigationBar = ({data, setData, like, setSelectPage}) => {

  const [input, setInput] = useState('');

  const onChange = (e) =>{
    setInput(e.target.value);
  }

  const handleSearch = ()=>{
    const test = [];

      // console.log(input);
      // console.log("data : ", data);
    data.forEach((item) => {
        // console.log(item.MAIN_TITLE);
          const title = item.MAIN_TITLE;
            // console.log("data : ", item);
          if (title.includes(input)) {
            test.push(item)
          }
        }
    )
    setData(test);
    setSelectPage(1);
  }

  const onKeyPress = (e)=>{
      if(e.key === 'Enter'){
          handleSearch();
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
          <img src="/images/icon-search.svg" onClick={handleSearch} alt="search" />
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
