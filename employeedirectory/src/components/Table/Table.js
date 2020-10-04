import React, {useState, useEffect} from "react";
import axios from "axios";

function Table (){
    const [users, setUsers] = useState([]);
// enter the coding for useEffect here so that the api call is only made once and does not keep refreshing.
//useEffect(() => {
//     fetch("localhost:3001/links/")
//         .then(Response => response.json())
//         .then(data => setData(data));
// }, []);
    axios.get("https://randomuser.me/api/?nat=us&results=200")
    .then(({data})=> setUsers(data.results));

    return (
        <table class="table table-dark">
  <thead>
    <tr>  
      <th scope="col"></th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {users.map(user => <tr>
      <th scope="row"><img src={user.picture.thumbnail}/></th>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.phone}</td>
    </tr>)}
  </tbody>
</table>
    )
}

export default Table;
