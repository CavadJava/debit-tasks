import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchTodos from '../api';


function App() {
  const [todos, setTodos] = useState([])
  const [myBasket, setMyBasket] = useState([])

  if (todos.length === 0) {
    fetchTodos().then(data => {
      setTodos(data.todos)
      console.log(data.todos);
    }).catch(error => {
      console.error(error);
      toast.error("Error fetching users data.");
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const handleAdd = (todo) => () => {
    if(myBasket.some(item => item.id === todo.id)){
      myBasket.map(item => {
        if(item.id === todo.id){
          item.count += 1;
          return item;
        }
      })
      setMyBasket([...myBasket]);
    }else{
      setMyBasket([...myBasket, {'id': todo.id, 'completed': todo.completed, 'count': 1, 'todo': todo.todo, 'userId': todo.userId}]);
    }
    localStorage.setItem('myBasket', JSON.stringify(myBasket));
  }

  const handleRemove = (todo) => () => {
    var restoreBasket = JSON.parse(localStorage.getItem('myBasket'));
    restoreBasket = restoreBasket.filter(item => item.id !== todo.id);
    setMyBasket(restoreBasket);
    localStorage.setItem('myBasket', JSON.stringify(restoreBasket));
  }
  const findInBasket = (todo) => {
    return myBasket.some(item => item.id === todo.id);
  }

  return (
    <>
      <div className='container'>
        <h1>Todos</h1>
        {todos.length === 0 ? (
          <p>No todos yet!</p>
        ) : (
          <div className='cards d-flex flex-row flex-wrap'>
            {todos.map((todo, index) => (
              <div key={index} className="card mb-2 me-2" style={{width: '250px',height: '200px'}}>
                <div className="card-body" style={{textAlign:'center'}}>
                  <p style={{display: 'none'}}>{todo.id}</p>
                  <p className="card-text">{todo.todo}</p>
                  <p className="card-text">Completed: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                  <button className='btn btn-primary' onClick={handleAdd(todo)}>{todo.completed? findInBasket(todo)?'Added':'Add':'Added'}</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {

          <div className='basket'>

            <table className='table table-striped table-hover'>
              <thead>
              <tr>
                <th scope="col">Task</th>
                <th scope="col">UserId</th>
                <th scope="col">Count</th>
                <th scope="col">Completed</th>
              </tr>
              </thead>
              <tbody>
              {
                myBasket.length > 0 ? myBasket.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.userId}</td>
                      <td>{item.count}</td>
                      <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                      <td><button className='btn btn-danger' onClick={handleRemove(item)}>Remove</button></td>
                    </tr>
                  )
                }) : myBasket.length === 0 && <tr><td colSpan="4">No items in basket</td></tr>
              }
              </tbody>
            </table>
          </div>
        }
      </div>
    </>
  )
}

export default App
