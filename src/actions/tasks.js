import axios from 'axios'

export const getTasksForProject = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:3000/tasks_by_project/${id}`)

        const data = await res.data;
        debugger
        dispatch({type: "GET_TASKS_FOR_PROJECT", tasks: data})
    }
}