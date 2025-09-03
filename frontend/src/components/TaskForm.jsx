import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !status) 
      return;
    addTask({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("pending");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" style={{marginLeft:"10px"}}>Add Task</button>
    </form>
  );
}
export default TaskForm;