import axios from "axios";

export const getTasksForProject = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3000/tasks_by_project", {
      withCredentials: true,
    });

    const data = await res.data;
    dispatch({ type: "GET_TASKS_FOR_PROJECT", tasks: data });
  };
};

export const putChangeTaskStatus = (id) => {
  return async (dispatch) => {
    const res = await axios.put(
      `http://localhost:3000/task_update_status/${id}`,
      { withCredential: true }
    );

    const data = await res.data;

    // dispatch({type: "PUT_TASK_CHANGE_STATUS"})
  };
};
