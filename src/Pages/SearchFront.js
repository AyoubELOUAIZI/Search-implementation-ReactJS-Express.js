import React, { useState } from 'react'
import './SearchFront.css'
import { Users } from '../data/users'
import Table from '../components/Table';

export const SearchFront = () => {
  const [input, setInput] = useState('');

  // const SearchResult = (Users)=>{
  //   return Users.filter(user => user.first_name.toLowerCase().includes(input) ||
  //     user.last_name.toLowerCase().includes(input) ||
  //     user.email.toLowerCase().includes(input) ||
  //     user.gender.toLowerCase().includes(input)
  //   );
  //}

  const keys = ["first_name", "last_name", "email","gender"];
  const SearchResult = (Users) => {
    return Users.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(input))
    );
  }
 

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
        <Table Users={SearchResult(Users)} />
      </div>
    </div>
  );


}
