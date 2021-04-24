const initialState = {
  tasks: [],
  project: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS_FOR_PROJECT": {
      let { tasks, status, project } = action.tasks;
      if (status === 200) {
        return {
          ...state,
          project: project,
          tasks: tasks,
        };
      }
    }
    default:
      return state;
  }
};
