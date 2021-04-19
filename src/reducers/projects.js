const initialState = {
  projects: [],
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PROJECTS_FOR_PM_AND_USERS": {
      let { projects, status, users } = action.data;
      if (status === 200) {
        return {
          ...state,
          projects: projects,
          users: users
        };
      }
    }
    case "CREATE_PROJECT_WITH_TASKS": {
      debugger
      return
    }
    default:
      return state;
  }
};
