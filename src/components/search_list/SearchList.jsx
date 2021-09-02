import React, { useState, useEffect } from 'react';
import UserList from '../user_list/UserList.jsx';
import SearchBar from '../search_bar/SearchBar.jsx';
import './search_list.css';

const SearchList = () => {
  const [users, setUsers] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchData = async () => {
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Network response was not ok.')
        })
        .then((response) => setUsers(response))
        .then(() => setIsLoading(false))
        .catch((error) => console.log(error))
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearchBar(event.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <>
      <h1 data-testid='header'>User List</h1>
      <div className='container'>
        <SearchBar handleChange={(event) => handleChange(event)} />
        <UserList users={filteredUsers} isLoading={isLoading} />
      </div>
    </>
  );
}

export default SearchList;
