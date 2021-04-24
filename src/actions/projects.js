import axios from "axios";

export const getAllOpenProjectsTasksAndTickets = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3000/open_projects_tasks_and_tickets', {withCredentials: true})

    const data = await res.data;
    dispatch({type: "GET_OPEN_PROJECTS_TASKS_AND_TICKETS", data: data})
  }
}

export const usersProjects = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/users_projects/", {
      withCredentials: true,
    });

    const data = await res.data;
    dispatch({ type: "USERS_PROJECTS", data: data });
  };
};

export const createProjectWithTasks = (reqObj) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:3000/projects', reqObj, {
      withCredentials: true,
    });
    const data = await res.data;
    dispatch({ type: "CREATE_PROJECT_WITH_TASKS", data: data });
  };
};

export const getCurrentTasksAndTickets = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://localhost:3000/current_tasks_and_tickets",
      { withCredentials: true }
    );

    const data = await res.data;
    dispatch({ type: "GET_TASKS_AND_TICKETS", data: data });
  };
};
