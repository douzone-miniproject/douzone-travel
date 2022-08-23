export function LoginReducer(state, action){

    switch(action.type){
        case 'signUp':
            console.log('test');
            if(state === null){
                console.log("empty state");
                localStorage.setItem('users', JSON.stringify([ { username: action.username, password: action.password } ]));
            }else{
                console.log("not empty state");
                localStorage.setItem('users', JSON.stringify([...state, { username: action.username, password: action.password } ]));
            }
            return [...state, { 'username': action.username, 'password': action.password }];
        default :
            console.log(action.type);
            return state;
    }
}