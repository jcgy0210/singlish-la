"use client";

import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";

// const users = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() =>{
//         fetch("http://localhost:3000/api/users", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json", // Set the request headers to indicate JSON format
//             },
//           })
//             .then((res) => res.json()) // Parse the response data as JSON
//             .then((data) => setUsers(data)); // Update the state with the fetched data
//         }, []);

//      // Create a collection of JSX elements based on the fetched "items" data
//   const collection = users.map((user) => {
//     return (

//     );
//   });

// }

// components/User.js

// Define the User type based on your API response structure
interface UserProps {
  user: {
    user_id: number;
    email_address: string;
    user_name: string;
  };
}
const User:React.FC<UserProps> = ({ user }) => {
  return (
    <div>
      <h3>{user.user_id}</h3>
      <p>Email: {user.email_address}</p>
      <p>Username: {user.user_name}</p>
    </div>
  );
};

export default User;