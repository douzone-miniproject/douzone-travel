export function MemberReducer(state = JSON.parse(localStorage.getItem('users')), action){

    switch(action.type){
        case 'signUp':
            if(state === null){
                console.log("empty state");
                localStorage.setItem('users', JSON.stringify([ { username: action.username, password: action.password, like: [] } ]));
                return [ { 'username': action.username, 'password': action.password, like: [] } ];
            }else{
                console.log("not empty state");
                localStorage.setItem('users', JSON.stringify([...state, { username: action.username, password: action.password, like: [] } ]));
                return [...state, { 'username': action.username, 'password': action.password, like: [] }];
            }
        case 'addLike' :
            const users = JSON.parse(localStorage.getItem('users'));
            users.forEach((user)=>{

            })

        default :

            return state;
    }
}