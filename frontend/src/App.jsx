import { useState,useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  
  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } 
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try {
      await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },    
        body: JSON.stringify(task),
      });
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
    

  const markCompleted = async (id) => { 
    await fetch(`/api/tasks/${id}`, {
      method: "PUT",
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };  
  return(
    <div style={{padding:"20px"}}>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} markCompleted={markCompleted} deleteTask={deleteTask} />
    </div>
    


  )}
  export default App;