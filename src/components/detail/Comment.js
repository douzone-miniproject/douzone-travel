import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom";
import InputUser from './InputUser';
import ListUser from "./ListUser";
import UpdateUser from "./UpdateUser";

const saveComments = (UC_SEQ, comment) => {
  const obj = localStorage.getItem(`${UC_SEQ}-comments`);
  if(obj){
    const newObj = JSON.parse(obj).concat(comment);
    localStorage.setItem(`${UC_SEQ}-comments`, JSON.stringify(newObj));
  }else {
    localStorage.setItem(`${UC_SEQ}-comments`, JSON.stringify([].concat(comment)));
  }
}

function Comment({ UC_SEQ }) {
  const [users, setUsers] = useState([]);

  const [inputs, setInputs] = useState({
    id: 0,
    name: '',
    review: ''
  });

  const { name, review } = inputs;

  const nextId = useRef(1);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onAdd = () => {
    const newUser = {
      id: nextId.current,
      name: name,
      review: review
    }

    setUsers([...users, newUser]);

    saveComments(UC_SEQ, newUser);

    nextId.current += 1;
    setInputs({
      name: '',
      review: ''
    });
  }


  const delName = (id) => {
    let newUsers = users;
    newUsers = newUsers.filter((user) => user.id !== id)
    setUsers(newUsers);
  }

  
  const onModify = (id) => {
    for (const element of users) {
      if (element.id === id) {
        element.name = inputs.name;
        element.review = inputs.review;
        break;
      }
    }
    setUsers([...users]);

    console.log("users:", users);
  }

  const [updateToggle, setUpdateToggle] = useState(false);
  //modify 버튼클릭시 UpdateUser에 클릭한 user 정보를 관리하는 state
  const [selectedUser, setSelectedUser] = useState('');
  const onUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  }

  //선택한 user의 상태를 변경하는 함수
  const onSelectUser = (user) => {
    console.log(user);
    setSelectedUser(user);
  }

  const onUpdate = (value) => {
    users.map((user) =>
      ((user.id === selectedUser.id ? user.name = value : user.name))
    )

    setUsers([...users]);
    setUpdateToggle(false);
  }

  return (
    <div>
      
      <InputUser
        username={name}
        lastName={review}
        onChange={onChange}
        onAdd={onAdd} />
      <ListUser data={users}
        delName={delName}
        modify={onModify}
        onUpdateToggle={onUpdateToggle}
        onSelectUser={onSelectUser}
        UC_SEQ={UC_SEQ}
      />

      {updateToggle && <UpdateUser selectedUser={selectedUser} onUpdate={onUpdate} />}

    </div>
  );
}

export default Comment;