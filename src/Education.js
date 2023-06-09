import React from 'react';

function Education({ university, degree, date }) {
  const style = {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div style={style}>
      <h3>{university}</h3>
      <p>{degree}</p>
      <p>{date}</p>
    </div>
  );
}

export default Education;
