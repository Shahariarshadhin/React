import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <Counter></Counter>
      <Externalusers></Externalusers>



    </div>
  );
}

/* function Counter() {

  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className='counter'>
      <h1>Count : {count}</h1>
      <button className='increaseBtn' onClick={increaseCount}>Increase</button>
      <button className='decreaseBtn' onClick={decreaseCount}>Decrease</button>
    </div>
  )
} */

function Counter() {

  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className='counter'>
      <h1>Count : {count}</h1>
      <button className='increaseBtn' onClick={increaseCount}>Increase</button>
      <button className='decreaseBtn' onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Externalusers() {

  const [user, setUser] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
      <p>{user.length}</p>
      {
        user.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <p>Email: {props.email}</p>

    </div>
  )
}

export default App;
