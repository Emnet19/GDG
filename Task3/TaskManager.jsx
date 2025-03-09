import React, { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "", dueDate: "" });
    const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited
    const [editedTask, setEditedTask] = useState({ title: "", description: "", dueDate: "" });

    // Add Task
    function addTask() {
        if (!newTask.title || !newTask.dueDate) return;
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
        setNewTask({ title: "", description: "", dueDate: "" });
    }

    // Delete Task
    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    // Toggle Completion
    function toggleCompletion(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    // Enable Edit Mode
    function startEditing(task) {
        setEditingTaskId(task.id);
        setEditedTask({ title: task.title, description: task.description, dueDate: task.dueDate });
    }

    // Save Edited Task
    function saveEditedTask(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, ...editedTask } : task
            )
        );
        setEditingTaskId(null);
    }

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>

            <div className="task-input">
                <input
                    type="text"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        {editingTaskId === task.id ? (
                            // Editing Mode: Show input fields
                            <>
                                <input
                                    type="text"
                                    value={editedTask.title}
                                    onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={editedTask.description}
                                    onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                                />
                                <input
                                    type="date"
                                    value={editedTask.dueDate}
                                    onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                                />
                                <button onClick={() => saveEditedTask(task.id)}>Save</button>
                            </>
                        ) : (
                            // Normal Mode: Show task details
                            <>
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <p>Due: {task.dueDate}</p>
                                <button onClick={() => toggleCompletion(task.id)}>
                                    {task.completed ? "Undo" : "Complete"}
                                </button>
                                <button onClick={() => startEditing(task)} className="edit-button">Edit</button>
                                <button onClick={() => deleteTask(task.id)} className="delete-btn">
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
