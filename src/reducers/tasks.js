const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS_FOR_PROJECT": {
      let { tasks, status } = action.tasks;
      if (status === 200) {
        return {
          ...state,
          tasks: tasks,
        };
      }
    }
    default:
      return state;
  }
};
