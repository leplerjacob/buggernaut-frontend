import axios from 'axios'

export const getUsersForProject = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3000/users_by_project/${id}`, {withCredentials: true})

        const data = await res.data;
        dispatch({type: "USERS_FOR_PROJECT", users: data})
    }
}