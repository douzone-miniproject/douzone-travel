import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styles from "./SignUp.module.css";

function SignUp() {

    const users = useSelector(state => state);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onChangeId = (e) => {
        setUsername(e.target.value);
    }

    const onChangePwd = (e) => {
        setPassword(e.target.value);
    }

    const TryToSignUp = () => {
        dispatch({type: 'signUp', username: {username}, password: {password}})
        alert("회원 가입 성공!");
        window.location.href = "http://localhost:3000/login"
        
    }

    return (
    <div>
      <h1 className={styles.title}>회원가입</h1>
      <div className={styles.login_form}>
        <input className={styles.text_field} placeholder={"아이디(이메일계정)"} onChange={onChangeId} />
        <input className={styles.text_field} type={"password"} placeholder={"비밀번호"} onChange={onChangePwd} />
        <div className={styles.check_wrap}>
        </div>
        <button className={styles.submit_btn} onClick={TryToSignUp}>회원가입</button>
      </div>
    </div>
    )
}

export default SignUp