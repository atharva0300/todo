import './App.css';
// importing components 
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1 className = "heading">Atharva's To-do App</h1>
      <TodoList />
    </div>
  );
}

export default App;
