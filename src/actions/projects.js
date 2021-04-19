import axios from "axios";

export const getProjectsForPMAndUsers = (id) => {
    return async (dispatch) => {
    const res = await axios.get(`http://localhost:3000/projects_of_pm/${id}`, {
      withCredentials: true,
    });
    
    const data = await res.data;
    dispatch({ type: "PROJECTS_FOR_PM_AND_USERS", data: data });
  };
};

export const createProjectWithTasks = (id) => {
  return async (dispatch) => {
    const res = await axios.post(`http://localhost:3000/projects`, {withCredentials: true})

    const data = await res.data
    dispatch({type: "CREATE_PROJECT_WITH_TASKS", data: data})
  }
}


