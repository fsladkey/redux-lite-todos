import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li>
      { todo.text }
    </li>
  )
};
