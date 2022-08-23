import styles from "./main.module.css";
import React, { useState } from 'react';
import { EventBanner } from "../eventBanner/eventBanner";
import Pagenation from "../Pagenation/Pagenation";
import { Sight } from "../sights/Sight";

export const Main = (props) => {
  const mainp = props.homeprops;
  const gu = ["강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사하구", "서구", "수영구", "영도구", "중구", "해운대구"];



  // 페이지 & 컨텐츠 수 계산을 위한 State
  // const [ selectPage, setSelectPage] = useState(1);
  // const [ postsPerPage, setPostPerPage] = useState(6);

  const selectPage = props.selectPage;
  const postsPerPage = props.postsPerPage;
  const setSelectPage = props.setSelectPage;

  const indexOfLast = selectPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  let results = currentPosts(mainp);

  return (
    <>
      <EventBanner />
      <div className="btn_wrap" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {gu.map((data, idx) => {
          return <button key={idx} className={styles.gu_btn}>{data}</button>
        })}
      </div>
      <div className={styles.filter}>
        <p>별점순</p>
        <p>리뷰순</p>
        <p>거리순</p>
      </div>
      <main className={styles.flex_wrap}>
        {results.map((data) => {
          return <Sight key={data.UC_SEQ} data={data} />
        })}
      </main>

      <Pagenation
        postsPerPage={postsPerPage}
        totalPosts={mainp.length}
        paginate={setSelectPage}
        selectPage={selectPage}
      />
    </>
  );
};
