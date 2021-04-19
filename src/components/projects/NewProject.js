import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsForPMAndUsers, createProjectWithTasks } from "../../actions/projects";
import InputTask from "../utilities/InputTask";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox";

const styles = StyleSheet.create({
  projectTitle: {
    fontSize: "14px",
  },
  inputBox: {
    width: "100%",
  },
  submitBtn: {
    width: "100%",
  },
});

const NewProject = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    estDuration: "",
    inputList: [],
    taskInputs: {},
  });
  let { id } = useSelector((state) => state.auth.user);
  let projects = useSelector((state) => state.projects.projects);
  let users = useSelector((state) => state.projects.users);

  useEffect(() => {
    dispatch(getProjectsForPMAndUsers(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {inputList, ...reqObj} = formState
    reqObj.pm_id = id
    dispatch(createProjectWithTasks(reqObj))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderProject = (project) => {
    return (
      <Row key={project.id}>
        <span className={css(styles.projectTitle)}>{project.title}</span>
        <span className={css(styles.projectTitle)}>{project.description}</span>
        <span className={css(styles.projectTitle)}>
          {project.date_start} | {project.date_end}
        </span>
      </Row>
    );
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.parentElement.getAttribute("data-set");
    let selectedValue = ""
    if(e.target.selectedIndex){
      const sIndex = e.target.selectedIndex
      const node = e.target.childNodes[sIndex]
      selectedValue = node.getAttribute('data-id')
    }
    setFormState((prevState) => {
      return {
        ...prevState,
        taskInputs: {
          ...prevState.taskInputs,
          [index]: { ...prevState.taskInputs[index], [name]: selectedValue ? parseInt(selectedValue) : value },
        },
      };
    });
  };

  const addTaskInput = (e) => {
    e.preventDefault()
    const index = formState.inputList.length + 1;
    setFormState((prevState) => ({
      ...prevState,
      inputList: formState.inputList.concat(
        <InputTask
          key={index}
          index={`task${index}`}
          users={users}
          onChange={handleTaskChange}
          inputStyle={css(styles.inputBox)}
        />
      ),
    }));
  };

  return (
    <div>
      <Row>
        <Column>{projects.map((project) => renderProject(project))}</Column>
      </Row>
      <form>
        <Column>
          <label>Project Title</label>
          <input
            className={css(styles.inputBox)}
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Project Title"
          />
          <label>
            Project Description
            <br />
            <textarea
            className={css(styles.inputBox)}
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date
            <br />
            <input
              className={css(styles.inputBox)}
              name="startDate"
              value={formState.startDate}
              onChange={handleChange}
              placeholder="Project Start Date"
            />
          </label>
          <label>
            End Date
            <br />
            <input
              className={css(styles.inputBox)}
              name="endDate"
              value={formState.endDate}
              onChange={handleChange}
              placeholder="Project End Date"
            />
          </label>
          <label>
            Estimated Duration
            <br />
            <input
              className={css(styles.inputBox)}
              name="estDuration"
              value={formState.estDuration}
              onChange={handleChange}
              placeholder="Project Est. Duration"
            />
          </label>
          <br />
          <label>Add task</label>
          <button onClick={addTaskInput}>Add Task</button>
          {formState.inputList.map((input, index) => input)}
          <button
            className={css(styles.submitBtn)}
            onClick={handleSubmit}
          >Submit</button>
        </Column>
      </form>
    </div>
  );
};

export default NewProject;
