import React, { useState } from 'react'
import './SearchFront.css'
import { Users } from '../data/users'
import Table from '../components/Table';

export const SearchFront = () => {
  const [input, setInput] = useState('');
  //first v1
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")))
  // return (
  //   <div className="search-front">
  //     <h1>SearchFront</h1>
  //     <div>
  //       <input type="text" placeholder="Search ..." onChange={(e) => setInput(e.target.value)} />

  //       <ul>
  //         {Users.filter(user => user.first_name.toLowerCase().includes(input))
  //           .map((user) =>
  //             <li key={user.id}>{user.first_name}</li>
  //           )}
  //       </ul>
  //     </div>
  //   </div>
  // );

  //v2
  return (
    <div className="search-front">
      <h1>SearchFront</h1>
      <div>
        <input type="text" placeholder="Search ..." onChange={(e) => setInput(e.target.value)} />


        <Table Users={Users.filter(user => user.first_name.toLowerCase().includes(input) ||
          user.last_name.toLowerCase().includes(input) ||
          user.email.toLowerCase().includes(input) ||
          user.gender.toLowerCase().includes(input) 
          )} />
      </div>
    </div>
  );


}
