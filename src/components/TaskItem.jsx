import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div style={{
      ...styles.card,
      backgroundColor: task.completed ? '#e8f5e9' : '#fff',
      opacity: task.completed ? 0.6 : 1
    }}>
      <div style={styles.top}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <h4 style={{
          marginLeft: '10px',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}>
          {task.title}
        </h4>
      </div>
      {task.description && <p>{task.description}</p>}
      <div style={styles.footer}>
        <small style={styles.date}>
        {formatTimestamp(task.createdAt)}
        </small>

        <button onClick={() => onDelete(task.id)} style={styles.delete}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '12px',
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  delete: {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  date: {
  color: '#228B22',
  fontSize: '12px',
  fontStyle: 'italic',
  
}

};
function formatTimestamp(dateString) {
  const d = new Date(dateString);
  const now = new Date();

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return isToday ? `Today at ${time}` : `${date} at ${time}`;
}


export default TaskItem;
