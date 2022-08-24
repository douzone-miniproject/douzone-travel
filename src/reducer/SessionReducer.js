export function SessionReducer(state=localStorage.getItem('session'), action){
    switch(action.type) {
        case 'login':
            if(state===null){
                localStorage.setItem('session', [action.username]);
                return [action.username];
            }else{
                localStorage.setItem('session', [...state, action.username]);
                return [...state, action.username];
            }

        default:
            return state;
    }
}
