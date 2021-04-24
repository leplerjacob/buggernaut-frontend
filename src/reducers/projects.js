const initialState = {
  projects: [],
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USERS_PROJECTS": {
      let { projects, status, users } = action.data;
      if (status === 200) {
        return {
          ...state,
          projects: projects,
          users: users,
        };
      }
    }
    case "CREATE_PROJECT_WITH_TASKS": {
      let { project, status } = action.data;
      if (status === 200) {
        return {
          ...state,
          projects: [...state.projects, project],
        };
      }
      return;
    }
    case "GET_OPEN_PROJECTS_TASKS_AND_TICKETS": {
      let projects = action.data;
      if (projects.length > 0) {
        return {
          ...state,
          projects: projects,
        };
      }
    }
    default:
      return state;
  }
};
