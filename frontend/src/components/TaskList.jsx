function TaskList({ tasks, markCompleted, deleteTask }) {
    return (    
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ marginBottom: "10px" }}>
                    <strong>{task.title}</strong> - {task.description} [{task.status}]
                    {""}
                    {task.status === "pending" && (
                        <button   onClick={() => markCompleted(task.id)}  style={{ marginLeft: "10px" }}>
                            Mark as Completed
                        </button>
                    )}
                    <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
                        Delete
                    </button>
                </li>
            ))}
            
        </ul>
    );
}
export default TaskList;