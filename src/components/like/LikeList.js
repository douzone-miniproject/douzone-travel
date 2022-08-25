import styles from "./Like.module.css";
import {useSelector} from "react-redux";

export default function LikeList({like: likeList, onRemove}) {

    const users = useSelector(state => state.MemberReducer);
    const loggedIn = useSelector(state => state.SessionReducer);

    const user = users.forEach(user => {
        if( user.username === loggedIn){
            return user;
        }
    })

  return (
    <section className={styles.like_list}>
      <input type="checkbox" />
      <div className={styles.like_wrap}>
        <div className={styles.like_image}>
          <img src={likeList.image} alt="like-img" />
        </div>
          {
              user.like.map((myLike)=>{
                  if(myLike === likeList.id){
                  return (<div className={styles.like_info}>
                      <p className={styles.seller_store}>{likeList.gu}</p>
                      <p className={styles.sight_name}>{likeList.sight_name}</p>
                      <p className={styles.tel}>{likeList.tel}</p>
                      <p className={styles.title}>{likeList.title}</p>
                  </div>)}
              })
          }

      </div>
      <div></div>

      <div className={styles.like_btn_wrap}>
        <button className={styles.btn_submit} onClick={() => onRemove(likeList.id)}>삭제</button>
      </div>
    </section>
  )
}