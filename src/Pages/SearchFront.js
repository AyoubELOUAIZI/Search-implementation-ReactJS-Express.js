import React, { useState } from 'react'
import './SearchFront.css'
import { Users } from '../data/users'

export const SearchFront = () => {
  const [input, setInput] = useState('');
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
  return (
    <div className="search-front">
      <h1>SearchFront</h1>
      <div>
        <input type="text" placeholder="Search ..." onChange={(e) => setInput(e.target.value)} />

        <ul>
          {Users.filter(user => user.first_name.toLowerCase().includes(input))
            .map((user) =>
              <li key={user.id}>{user.first_name}</li>
            )}
        </ul>
      </div>
    </div>
  );
}
