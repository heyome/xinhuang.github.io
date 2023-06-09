import React from 'react';

function Experience({ company, role, duration, responsibilities, link }) {
  const style = {
    marginBottom: '2rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div style={style}>
      <h3>{company}</h3>
      <h4>{role}</h4>
      <p>{duration}</p>
      {link && <p>Link: <a href={link}>{link}</a></p>}
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
