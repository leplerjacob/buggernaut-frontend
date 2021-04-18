const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "USERS_FOR_PROJECT": {
            let {users, status} = action.users
            if (status === 200) {
                return {
                    ...state,
                    users: users
                }
            }
        }
        default:
            return state
    }
}