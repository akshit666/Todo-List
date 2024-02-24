import React from 'react';

export default function ListItems({ arr, completeTodo, deleteTodo }) {
  return (
    <div className='tagname'>
      {arr.map((item, index) => (
        <div key={index}>
          <h3 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</h3>
          <div className='btn'>
            <button onClick={() => completeTodo(index)}>
              {item.completed ? '❌' : '✔️'}
            </button>
            <button onClick={() => deleteTodo(index)}>🗑️  </button>
          </div>
        </div>
      ))}
    </div>
  );
}