import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import {
  getTasks,
  saveTasks,
  getUsername,
  clearUsername
} from '../utils/localStorage';

function Dashboard() {
  const username = getUsername(); 
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All'); 

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleLogout = () => {
    clearUsername();
    navigate('/login');
  };

  const handleAddTask = (task) => {
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const getFilteredTasks = () => {
    if (filter === 'All') return tasks;
    if (filter === 'Completed') return tasks.filter(t => t.completed);
    return tasks.filter(t => !t.completed);
  };

  const getCounts = () => ({
    All: tasks.length,
    Completed: tasks.filter(t => t.completed).length,
    Pending: tasks.filter(t => !t.completed).length
  });

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Welcome, {username} 👋</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h3>Add Task</h3>
          <TaskForm onAddTask={handleAddTask} />
        </section>

        <section style={styles.section}>
          <h3>Filter Tasks</h3>
          <TaskFilter
            current={filter}
            onChange={setFilter}
            counts={getCounts()}
          />
        </section>

        <section style={styles.section}>
          <h3>Your Tasks</h3>
          <TaskList
            tasks={getFilteredTasks()}
            onToggle={(id) => {
              const updated = tasks.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
              );
              setTasks(updated);
              saveTasks(updated);
            }}
            onDelete={(id) => {
              const updated = tasks.filter(t => t.id !== id);
              setTasks(updated);
              saveTasks(updated);
            }}
          />
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '20px',
    background: '#f4f6f8',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  section: {
    background: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
};

export default Dashboard;
