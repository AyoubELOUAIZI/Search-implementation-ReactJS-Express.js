import React, { useEffect, useState } from 'react'
// import { Users } from '../data/users'
import Table from '../components/Table'; 
import './SearchBack.css'
import axios from 'axios';


export const SearchBack = () => {

  const [input, setInput] = useState('');
  const [ResultUsers, setResultUsers] = useState([])

  // const keys = ["first_name", "last_name", "email", "gender"];
  // const SearchResult = (Users) => {
  //   return Users.filter((user) =>
  //     keys.some((key) => user[key].toLowerCase().includes(input))
  //   );
  // }

  useEffect(() => {
    const fetchResultUsers = async () => {
      const res = await axios.get(`http://localhost:3000/api/users?q=${input}`);
      console.log(res);
      setResultUsers(res.data);
    };
      fetchResultUsers();
  }, [input]);

  return (
    <div className="search-back">
      <h1>SearchBack:Using the backend to filter and send 20 result and front to fetch results</h1>
      <div>
        <input type="text" placeholder="Search ..." onChange={(e) => setInput(e.target.value)} />
        <Table Users={ResultUsers} />
      </div>
    </div>
  );
}
