const loggedin = {isLogin: false}

function isLoginReducer(state = loggedin, action){
    switch(action.type) {
        case 'LOGIN':
            state.isLogin = !state.isLogin
        default:
            return state
    }
}

export default isLoginReducer