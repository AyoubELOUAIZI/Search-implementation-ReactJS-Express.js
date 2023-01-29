import React, { useState } from 'react'
import { Users } from '../data/users'
import Table from '../components/Table'; 
import './SearchBack.css'


export const SearchBack = () => {


  const [input, setInput] = useState('');

  const keys = ["first_name", "last_name", "email", "gender"];
  const SearchResult = (Users) => {
    return Users.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(input))
    );
  }

 
  return (
    <div className="search-back">
      <h1>SearchBack:Using also the backend</h1>
      <div>
        <input type="text" placeholder="Search ..." onChange={(e) => setInput(e.target.value)} />
        <Table Users={SearchResult(Users)} />
      </div>
    </div>
  );
}
