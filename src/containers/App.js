import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    console.log('Fetching robots')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  }, [])

  const onSearchFieldChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChangeHandler={onSearchFieldChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  )
};

export default App;