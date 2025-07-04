import React from 'react';

function TaskFilter({ current, onChange, counts }) {
  const filters = ['All', 'Completed', 'Pending'];

  return (
    <div style={styles.container}>
      {filters.map(f => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{
            ...styles.button,
            backgroundColor: current === f ? '#4e73df' : '#eee',
            color: current === f ? '#fff' : '#333'
          }}
        >
          {f} ({counts[f]})
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
  }
};

export default TaskFilter;
