import React, { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const adicionar = () => {
    let fazer = document.getElementById('todo').value;
    setTodos([...todos, { task: fazer, completed: false }]);
    document.getElementById('todo').value = "";
  };

  const remover = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const marcarCompleto = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Adicionar Todo</h1>
      <input id="todo" type="text" />

      <button onClick={adicionar}>Enviar</button>

      <h2>Lista de Tarefas:</h2>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.task}
          <button onClick={() => remover(index)}>Remover</button>
          <button onClick={() => marcarCompleto(index)}>
            {todo.completed ? 'Desmarcar' : 'Marcar'} como Completo
          </button>
        </div>
      ))}
    </div>
  );
}
