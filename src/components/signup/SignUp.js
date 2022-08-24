import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

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
        alert("회원 가입 성공!")
    }

    return (
        <div>
            <input placeholder={"username"} onChange={onChangeId}/>
            <input type={"password"} placeholder={"password"} onChange={onChangePwd}/>
            <button onClick={TryToSignUp} >Sign Up</button>
        </div>
    )
}

export default SignUp