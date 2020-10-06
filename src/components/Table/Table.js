import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  // enter the coding for useEffect here so that the api call is only made once and does not keep refreshing.
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=us&results=200")
      .then(({ data }) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      });
  }, []);

  const handleFilter = (val) => {
    console.log(val);
    const filtered = users.filter(user => {
      return user.name.first.toLowerCase().includes(val) || user.name.last.toLowerCase().includes(val)
    });
    setFilteredUsers(filtered)
  };

  return (
    <>
      <input onChange={(event)=> handleFilter(event.target.value.toLowerCase()) } style={{ width: "60%", marginLeft: "20%", marginBottom: "50px" }} placeholder="type in here to filter employees" />
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
          {filteredUsers.map((user) => (
            <tr>
              <th scope="row">
                <img src={user.picture.thumbnail} />
              </th>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
