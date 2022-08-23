import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userReducer = useSelector(state => state);

    const onChangeId = (e)=>{
        setUsername(e.target.value);
    }

    const onChangePwd = (e)=>{
        setPassword(e.target.value);
    }

       const TryToLogin = ()=>{
           const users = userReducer;
           // console.log(users[0].username);

           users.map((user)=>{

               // console.log(user.username);
               // console.log(user.password);
               // console.log(username === user.username.username);
               // console.log(password === user.password.password);

               if( username === user.username.username ){
                   if(password === user.password.password){
                       console.log("success");
                   }
               }
           })

       }

    return (
        <div>
            <input placeholder={"username"} onChange={onChangeId}/>
            <input type={"password"} placeholder={"password"} onChange={onChangePwd}/>
            <button onClick={TryToLogin}>Login</button>
        </div>
    )
}

export default Login