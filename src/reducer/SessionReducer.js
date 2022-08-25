export function SessionReducer(state=localStorage.getItem('session'), action){
    switch(action.type) {
        case 'login':
                localStorage.setItem('session', action.username.username);
                return action.username.username;

        default:
            return state;
    }
}
